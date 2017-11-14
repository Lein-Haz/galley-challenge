import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {FollowerPaginationModel} from "./models/followerPagination.model";
import {ConstantService} from "./constants";
import {HttpResponse} from "@angular/common/http";
import {FollowerModel} from "./models/follower.model";
import {isNullOrUndefined} from "util";
import {Subject} from "rxjs/Subject";

@Injectable()
export class FollowerPaginationService{

  private followerPaginationArray: Observable<FollowerPaginationModel>;
  private paginationMapObs: Observable<FollowerPaginationModel>;
  private nextPageNumberToLoad: number = 0;
  private canLoadMore: boolean = false;
  private canLoadSub: Subject<boolean> = new Subject();

  /* Grr, remembered after I had finished this that I didn't need all the first, prev, next, last stuff. */
  private parseHeaderLink(headerLinkString: string): FollowerPaginationModel[]{
    let linkPaginationResults = headerLinkString.match(ConstantService.REGEX.LINK_HEADER_PAGINATION_REGEX);
    let paginationLinksArray = [];
    if(linkPaginationResults && Array.isArray(linkPaginationResults) && linkPaginationResults.length > 0){
      linkPaginationResults.forEach(linkPaginationString => {
        let link = linkPaginationString.match(ConstantService.REGEX.LINK_EXTRACT_REGEX);
        let relation = linkPaginationString.match(ConstantService.REGEX.RELATION_EXTRACT_REGEX);
        let page = Number.parseInt(link[0].match(ConstantService.REGEX.PAGE_EXTRACT_REGEX)[0]);
        let paginationObject: FollowerPaginationModel = {
          relation: relation[0],
          link: link[0],
          page: page
        };
        paginationLinksArray.push(paginationObject);
      });
    }
    return paginationLinksArray;
  }

  private getNextFollowerPaginationModel(fullFollowerPaginationArray: FollowerPaginationModel[]): FollowerPaginationModel{
    let nextRelationIndex = fullFollowerPaginationArray.map(x=>{return x.relation}).indexOf(ConstantService.PAGINATION_RELATIONS.NEXT);
    return fullFollowerPaginationArray[nextRelationIndex];
  }

  public getLoadMoreSubject(){
    return this.canLoadSub;
  }

  public addPaginationInformation(httpResponseObs:Observable<HttpResponse<FollowerModel[]>>){
    httpResponseObs.subscribe(
      httpResponse=>{
        let linkString = httpResponse.headers.get('Link');
        if(isNullOrUndefined(linkString)){
          this.lockLoading();
        }else{
          this.getLinkString(linkString);
        }
      }
    );
  }

  private getLinkString(linkString: string){
    let nextPaginationObject = this.getNextFollowerPaginationModel(this.parseHeaderLink(linkString));

    if(isNullOrUndefined(nextPaginationObject)){
      this.lockLoading();
    }else{
      this.allowLoading();
      this.setNewPaginationData(nextPaginationObject);
    }
  }

  private setNewPaginationData(nextPaginationObject: FollowerPaginationModel){
    this.nextPageNumberToLoad = nextPaginationObject.page;

    if(isNullOrUndefined(this.followerPaginationArray)){
      this.followerPaginationArray = Observable.from([nextPaginationObject]);
    }else{
      this.followerPaginationArray = this.followerPaginationArray.merge(Observable.from([nextPaginationObject]));
    }

    //Turns the merged observable in a flat one we can easily filter later
    this.paginationMapObs = this.followerPaginationArray.map((nextFollowerPagination, index)=>{
      return nextFollowerPagination;
    });
  }

  private lockLoading(){
    this.canLoadMore = false;
    this.canLoadSub.next(this.canLoadMore);
  }

  private allowLoading(){
    this.canLoadMore = true;
    this.canLoadSub.next(this.canLoadMore);
  }

  public nextFollowerPaginationObject():Observable<FollowerPaginationModel>{
    return this.paginationMapObs.filter((followerPaginationModel)=>followerPaginationModel.page===this.nextPageNumberToLoad);
  }
}

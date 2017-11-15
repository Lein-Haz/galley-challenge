import {Injectable} from "@angular/core";
import {FollowerModel} from "./models/follower.model";
import {GithubSearchService} from "./github.search.service";
import "rxjs/add/observable/forkJoin";
import {FollowerPaginationService} from "./follower.pagination.service";
import {HttpResponse} from "@angular/common/http";
import {ConstantService} from "./constants";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class FollowerService{

  constructor(
    private gitHubSearchService: GithubSearchService,
    private followerPaginationService: FollowerPaginationService
  ){}

  private followers: FollowerModel[] = [];
  private followersSubject: Subject<FollowerModel[]> = new Subject();

  public getFollowersSubject(): Subject<FollowerModel[]>{
    return this.followersSubject;
  }

  public getLoadMoreSubject():Subject<boolean>{
    return this.followerPaginationService.getLoadMoreSubject();
  }

  public loadInitialFollowers(followersUrl: string){
    this.followerLoadHandler(followersUrl, ConstantService.FOLLOWER_HTTP_PARAMS.INITIAL);
  }

  private followerLoadHandler(followersUrl:string, options?: {}){
    let httpResponseSubject: Subject<HttpResponse<FollowerModel[]>> = new Subject();
    let httpResponseObs = this.gitHubSearchService.getFollowers(followersUrl, options);

    this.followerPaginationService.addPaginationInformation(httpResponseSubject);
    httpResponseSubject.subscribe(
      data=>{
        this.followers = this.followers.concat(data.body);
        this.followersSubject.next(this.followers);
      }
    );
    httpResponseObs.subscribe(httpResponseSubject);
  }

  public loadMoreFollowers(){
    let urlString: Observable<string>;
    let pagObs = this.followerPaginationService.nextFollowerPaginationObject();
    pagObs.subscribe(
      followerPagination=>{
        urlString = Observable.of(followerPagination.link);
      }
    );
    urlString.subscribe(
      nextFollowersUrl=>{
        this.followerLoadHandler(nextFollowersUrl, ConstantService.FOLLOWER_HTTP_PARAMS.PAGINATED);
      }
    );
  }
}

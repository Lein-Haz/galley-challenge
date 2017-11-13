import {Injectable} from "@angular/core";
import {FollowerModel} from "./models/follower.model";
import {Observable, Subject} from "rxjs";
import {GithubSearchService} from "./github.search.service";
import "rxjs/add/observable/forkJoin";
import {FollowerPaginationService} from "./follower.pagination.service";
import {HttpResponse} from "@angular/common/http";

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

  public loadFirst(followersUrl: string){
    this.followerLoadHandler(followersUrl);
  }

  private followerLoadHandler(followersUrl: string){
    let httpResponseSubject: Subject<HttpResponse<FollowerModel[]>> = new Subject();
    let httpResponseObs = this.gitHubSearchService.getFollowers(followersUrl);

    this.followerPaginationService.addPaginationInformation(httpResponseSubject);
    httpResponseSubject.subscribe(
      data=>{
        this.followers = this.followers.concat(data.body);
        console.log(this.followers);
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
        console.log("in the url string sub");
        console.log(nextFollowersUrl);
        this.followerLoadHandler(nextFollowersUrl);
      }
    );
  }
}

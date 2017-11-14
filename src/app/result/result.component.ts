import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {UserModel} from "../../core/models/user.model";
import {FollowerModel} from "../../core/models/follower.model";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Observable} from "rxjs";
import "rxjs/add/operator/switchMap";
import {UserService} from "../../core/user.service";
import {FollowerService} from "../../core/follower.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResultComponent implements OnInit, OnDestroy {

  public user: UserModel;
  private userObs: Observable<UserModel>;

  private followerSubscription: Subscription;
  public followers: FollowerModel[] = [];

  private loadMoreEnabledSubscription: Subscription;
  public loadMoreEnabled: boolean = false;

  private paramUserName: Observable<string>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private followerService: FollowerService
  ) { }

  ngOnInit() {
    if(this.userService.user){
      this.user = this.userService.user;
      this.loadFollowers(this.user.followers_url);
    }else{
      console.log("I would load, but I'm not right now");
      this.loadUser();
    }

    let followersSubject = this.followerService.getFollowersSubject();
    this.followerSubscription = followersSubject.subscribe(
      followers=>{
        this.followers = followers;
      }
    );
    let loadMoreSubject = this.followerService.getLoadMoreSubject();
    this.loadMoreEnabledSubscription = loadMoreSubject.subscribe(
      canLoadMoreBoolean=>{
        this.loadMoreEnabled = canLoadMoreBoolean;
      }
    );
  }

  /* if we are just using the url instead of the search flow */
  private loadUser(){
    this.paramUserName = this.activatedRoute.paramMap
      .switchMap((params:ParamMap)=>params.getAll('id')
      );

    console.log(this.paramUserName);
    this.paramUserName.subscribe(data=>{
      console.log("paramUserName here is");
      console.log(data);
      this.userObs = this.userService.getOrLoadUser(data);
    });

    this.userObs.subscribe(
      data=>{
        this.user = data;
        this.loadFollowers(this.user.followers_url);
      }
    );
  }

  private loadFollowers(followersUrl: string){
    if(this.user.followers > 0){
      //this.followerService.loadInitialFollowers(followersUrl);
      console.log("not loading followers RN");
    }
  }

  public clickyLoad(){
    this.followerService.getridOfThisLoader('https://api.github.com/users/anotherjesse/followers?per_page=100');
  }

  public loadMore(){
    this.followerService.loadMoreFollowers();
  }

  ngOnDestroy(): void {
    this.followerSubscription.unsubscribe();
    this.loadMoreEnabledSubscription.unsubscribe();
  }

}

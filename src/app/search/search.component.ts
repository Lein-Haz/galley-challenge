import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {GithubSearchService} from "../../core/github.search.service";
import {FollowerService} from "../../core/follower.service";
import {UserModel} from "../../core/models/user.model";
import {FollowerModel} from "../../core/models/follower.model";
import {UserService} from "../../core/user.service";

@Component({
  selector: 'user-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  public userSearch: string;

  public userguy: UserModel;
  public followerList: FollowerModel[];

  @Output()
  userSearchResultEmitter: EventEmitter<UserModel> = new EventEmitter();


  constructor(
    private githubSearchService: GithubSearchService,
    private followerService: FollowerService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  searchForUser(){
    this.searchUser(this.userSearch);
  }

  searchUser(username: string){
    let user: UserModel;
    let userResponse = this.githubSearchService.getUser(username);
    userResponse.subscribe(
      data => {
        this.userguy = data;
        this.userService.user = this.userguy;
        this.userSearchResultEmitter.emit(this.userguy);
        if(this.userguy.followers > 0){
          this.getFollowers(this.userguy.followers_url, this.userguy.followers);
        }
      }
    );
  }

  getFollowers(followerUrl: string, followerCount: number){
    let followerResponse = this.githubSearchService.getInitialFollowers(followerUrl);
    followerResponse.subscribe(
      data => {
        this.followerList = data;
        console.log(this.followerList);

        //emit found user nav to results

        if(this.followerList.length < this.userguy.followers){
          console.log("we gotta get more");
        }
      }
    );
  }

}

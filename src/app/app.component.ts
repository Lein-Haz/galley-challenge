import {Component, OnInit} from '@angular/core';
import {GithubSearchService} from "../core/github.search.service";
import {FollowerService} from "../core/follower.service";
import {UserModel} from "../core/models/user.model";
import {FollowerModel} from "../core/models/follower.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public userguy: UserModel;
  public followerList: FollowerModel[];

  public userSearch: string;

  constructor(
    private githubSearchService: GithubSearchService,
    private followerServ: FollowerService,
    private router: Router,
    private actRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    let pagString = '<https://api.github.com/user/2723/followers?page=2>; rel=\"next\", <https://api.github.com/user/2723/followers?page=175>; rel=\"last\"';
    let laterPagString = '<https://api.github.com/user/2723/followers?per_page=100&page=44>; rel="next", <https://api.github.com/user/2723/followers?per_page=100&page=53>; rel="last", <https://api.github.com/user/2723/followers?per_page=100&page=1>; rel="first", <https://api.github.com/user/2723/followers?per_page=100&page=42>; rel="prev"';

    //this.searchUser('Lein-haz');
    //this.searchUser('kevinclark');
    //this.searchUser('holman');
  }

  findTheDude(){
    this.searchUser(this.userSearch);
  }

  searchUser(username: string){
    let user: UserModel;
    let userResponse = this.githubSearchService.getUser(username);
    userResponse.subscribe(
      data => {
        this.userguy = data;
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
        this.router.navigate(['/', this.userguy.login]);
        if(this.followerList.length < this.userguy.followers){
          console.log("we gotta get more");
        }
      }
    );
  }
  title = 'OTP';
}

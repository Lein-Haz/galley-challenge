import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {GithubSearchService} from "../../core/github.search.service";
import {FollowerService} from "../../core/follower.service";
import {UserModel} from "../../core/models/user.model";
import {UserService} from "../../core/user.service";

@Component({
  selector: 'user-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  public userSearch: string;

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
        user = data;
        this.userService.user = user;
        this.userSearchResultEmitter.emit(user);
      }
    );
  }



}

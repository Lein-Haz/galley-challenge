import {Component, OnInit} from '@angular/core';
import {GithubSearchService} from "../core/github.search.service";
import {FollowerPaginationService} from "../core/follower.pagination.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private githubSearchService: GithubSearchService, private followerPag: FollowerPaginationService){}

  ngOnInit(): void {
    let pagString = '<https://api.github.com/user/2723/followers?page=2>; rel=\"next\", <https://api.github.com/user/2723/followers?page=175>; rel=\"last\"';
    let laterPagString = '<https://api.github.com/user/2723/followers?per_page=100&page=44>; rel="next", <https://api.github.com/user/2723/followers?per_page=100&page=53>; rel="last", <https://api.github.com/user/2723/followers?per_page=100&page=1>; rel="first", <https://api.github.com/user/2723/followers?per_page=100&page=42>; rel="prev"';
    //this.githubSearchService.doIt();

    let goNext = this.followerPag.getNextFollowersUrl(laterPagString);
    console.log(goNext);
  }
  title = 'OTP';
}

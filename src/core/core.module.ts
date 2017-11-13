import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ApiService} from "./api.service";
import {HttpClientModule} from "@angular/common/http";
import {GithubSearchService} from "./github.search.service";
import {FollowerService} from "./follower.service";
import {UserService} from "./user.service";
import {FollowerPaginationService} from "./follower.pagination.service";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [


  ],
  providers: [
    ApiService,
    GithubSearchService,
    FollowerService,
    UserService,
    FollowerPaginationService
  ],
  bootstrap: []
})
export class CoreModule { }

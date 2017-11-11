import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ApiService} from "./api.service";
import {HttpClientModule} from "@angular/common/http";
import {GithubSearchService} from "./github.search.service";

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
    GithubSearchService
  ],
  bootstrap: []
})
export class CoreModule { }

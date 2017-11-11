import {Injectable} from "@angular/core";
import {UserModel} from "./models/user.model";
import {ApiService} from "./api.service";
import {FollowerModel} from "./models/follower.model";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";

@Injectable()
export class GithubSearchService{

  constructor(private apiService: ApiService){}

  getUser(username: string): Observable<UserModel>{
    return this.apiService.apiGet<UserModel>('https://api.github.com/users/' + username);
  }

  public getInitialFollowers(followersUrl: string): Observable<FollowerModel[]>{
    return this.apiService.apiGet<FollowerModel[]>(followersUrl, {params: {per_page: 100}});
  }

  private getPaginatedFollowers(followersUrl: string){
    let userRes = this.apiService.apiGet<HttpResponse<FollowerModel[]>>(followersUrl, {observe: 'response'});
    userRes.subscribe(
      data => {
        console.log(data);
        console.log(data.headers.get('Link'));
      },
      err => {
        this.apiService.handleApiError(err);
      }
    );
  }


}

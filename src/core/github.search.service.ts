import {Injectable} from "@angular/core";
import {UserModel} from "./models/user.model";
import {ApiService} from "./api.service";
import {FollowerModel} from "./models/follower.model";
import {Observable} from "rxjs/Observable";
import {ConstantService} from "./constants";
import {HttpResponse} from "@angular/common/http";

@Injectable()
export class GithubSearchService{

  constructor(private apiService: ApiService){}

  doIt(){
    //this.getUser('Lein-haz');
    //this.getUser('holman');
    //this.howMangy('https://api.github.com/users/holman/followers',50);
    //this.howMangy('https://api.github.com/users/Lein-haz/followers');
    //this.howMangy('https://api.github.com/users/holman/followers',50);
  }

  getUser(username: string){
    let userResponse = this.apiService.apiGet<UserModel>('https://api.github.com/users/' + username);
    userResponse.subscribe(
      data => {
        let thisGuy = data;
        console.log(thisGuy);
        console.log(thisGuy.name);
      },
      err => {
        this.apiService.handleApiError(err);
      }
    );
  }

  howMangy(followersUrl: string, followerCount: number = 0){
    if(followerCount > ConstantService.GITHUB_SEARCH.REQUEST_DEFAULT_FOLLOWER_COUNT){
      // do with pagination
      this.getPaginatedFollowers(followersUrl);
    }else{
      this.getFollowers(followersUrl);
    }
  }

  getFollowers(followersUrl: string){
    let followerResponse = this.apiService.apiGet<FollowerModel[]>(followersUrl);
    followerResponse.subscribe(
      data => {
        console.log(data);
        data.forEach(follower => {
          console.log(follower.login);
        });
      },
      err => {
        this.apiService.handleApiError(err);
      }
    );
  }

  getPaginatedFollowers(followersUrl: string){
    let userRes = this.apiService.apiGet<HttpResponse<FollowerModel[]>>('https://api.github.com/users/holman/followers', {observe: 'response'});
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

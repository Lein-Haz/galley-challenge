import {Injectable} from "@angular/core";
import {UserModel} from "./models/user.model";
import {GithubSearchService} from "./github.search.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService{
  constructor(
    private githubSearchService: GithubSearchService
  ){}

  private _user: UserModel;

  get user(): UserModel {
    return this._user;
  }

  set user(user: UserModel) {
    this._user = user;
  }

  public getOrLoadUser(username: string): Observable<UserModel>{
    if(this.checkUserMatch(username)){
      return Observable.create(this._user);
    }else{
      return this.githubSearchService.getUser(username);
    }
  }

  checkUserMatch(username: string): boolean{
    if(this._user){
      return this._user.login === username;
    }else{
      return false;
    }
  }

}

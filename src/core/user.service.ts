import {Injectable} from "@angular/core";
import {ConstantService} from "./constants";
import {UserModel} from "./models/user.model";

@Injectable()
export class UserService{
  private _user: UserModel;

  get user(): UserModel {
    return this._user;
  }

  set user(user: UserModel) {
    this._user = user;
  }

}

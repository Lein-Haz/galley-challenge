import {Component, OnInit} from '@angular/core';
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
    private followerServ: FollowerService,
    private router: Router,
    private actRoute: ActivatedRoute
  ){}

  ngOnInit(): void {

  }

  searchResultHandler(user: UserModel){
      console.log("we got a guy");
      console.log(user);
      this.router.navigate(['', user.login]);
  }

  title = 'OTP';
}

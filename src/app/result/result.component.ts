import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {UserModel} from "../../core/models/user.model";
import {FollowerModel} from "../../core/models/follower.model";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Observable} from "rxjs";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/mergeMap";
import {UserService} from "../../core/user.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResultComponent implements OnInit {

  @Input()
  public user: UserModel;


  public followers: FollowerModel[];

  uhh: Observable<string>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute);

    let aThing = this.activatedRoute.paramMap
      .switchMap((params: ParamMap)=>params.getAll('id'));


    if(this.userService.user){
      this.user = this.userService.user;
    }else{
      this.loadUser();
    }

    console.log(this.user);
  }

  /* if we are just using the url instead of the search flow */
  private loadUser(){
    this.uhh = this.activatedRoute.paramMap
      .switchMap((params:ParamMap)=>params.getAll('id')
      );

    console.log(this.uhh);
    this.uhh.subscribe(data=>{
      console.log("uhh here is");
      console.log(data);
      console.log("We need to load again");
    });
  }

}

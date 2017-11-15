import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppMaterialModule} from "../app-material/app-material.module";
import {ResultUserComponent} from "./user/result-user.component";
import {ResultFollowerComponent} from "./follower/result-follower.component";
import {ActivatedRoute, Router, convertToParamMap, ParamMap} from "@angular/router";
import {UserService} from "../../core/user.service";
import {FollowerService} from "../../core/follower.service";
import {UserModel} from "../../core/models/user.model";
import {FollowerModel} from "../../core/models/follower.model";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Injectable} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";

import "rxjs/add/operator/switchMap";
import {Observable} from "rxjs";
import {Subscription} from "rxjs/Subscription";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ActivatedRouteStub
{
  private subject = new BehaviorSubject(convertToParamMap(this.testParamMap));
  paramMap = this.subject.asObservable();

  private _testParamMap: ParamMap;
  get testParamMap() { return this._testParamMap; }
  set testParamMap(params: {}) {
    this._testParamMap = convertToParamMap(params);
    this.subject.next(this._testParamMap);
  }

  get snapshot() {
    return { paramMap: this.testParamMap };
  }
}

describe('ResultComponent', () => {
  let mockActivated;
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  let user: UserModel;

  let followers: FollowerModel;
  let followersSubscription: Subscription;

  let loadMoreEnabled: boolean;
  let loadMoreEnabledSubscription: Subscription;

  let paramUserName: Observable<string>;

  let activatedRoute;
  let router : Router;
  let userService: UserService;
  let followerService: FollowerService;

  beforeEach(async(() => {
    mockActivated = new ActivatedRouteStub();
    let userServiceStub = {
      _user: UserModel,
      getOrLoadUser(username:string){
        let user: UserModel = new UserModel();
        user.login = username;
        return Observable.from([user]);
      }
    };

    let followerServiceStub = {
      followers: FollowerModel,
      getFollowersSubject():Subject<FollowerModel[]>{
        return new Subject();
      },
      getLoadMoreSubject():Subject<boolean>{
        return new Subject();
      }
    };
    TestBed.configureTestingModule({
      imports:[
        AppMaterialModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      declarations: [
        ResultComponent,
        ResultUserComponent,
        ResultFollowerComponent
      ],
      providers:[
        {provide: ActivatedRoute, useValue: mockActivated},
        {provide: UserService, useValue: userServiceStub},
        {provide: FollowerService, useValue: followerServiceStub}

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    activatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.testParamMap = {id: 'jack'};
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;

    userService = TestBed.get(UserService);
    followerService = TestBed.get(FollowerService);
    router = TestBed.get(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

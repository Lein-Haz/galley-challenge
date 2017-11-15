import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {AppMaterialModule} from "../app-material/app-material.module";
import {FormsModule} from "@angular/forms";
import {UserModel} from "../../core/models/user.model";
import {GithubSearchService} from "../../core/github.search.service";
import {UserService} from "../../core/user.service";
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Observable} from "rxjs/Rx";
import {Router} from "@angular/router";

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  let userSearch: string;

  let userService: UserService;
  let githubSearchService: GithubSearchService;
  let router: Router;

  beforeEach(async(() => {
    let githubSearchServiceStub = {
      getUser(username:string){
        let user: UserModel = new UserModel();
        user.login = username;
        return Observable.from([user]);
      }
    };
    let userServiceStub = {
      _user: UserModel,
      getOrLoadUser(username:string){
        return githubSearchServiceStub.getUser(username);
      }
    };
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        FormsModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [
        SearchComponent
      ],
      providers: [
        {provide: GithubSearchService, useValue: githubSearchServiceStub},
        {provide: UserService, useValue: userServiceStub},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;

    userService = TestBed.get(UserService);
    githubSearchService = TestBed.get(GithubSearchService);
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search for and retrieve user BigBob', async(() => {
    userSearch = 'BigBob';
    spyOn(router, 'navigate').and.callFake(()=>{
      return true;
    });
    component.searchUser(userSearch);
    expect(userService.user.login).toBe(userSearch);
  }));
});

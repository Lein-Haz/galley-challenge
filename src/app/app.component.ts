import {Component, OnInit} from '@angular/core';
import {FollowerService} from "../core/follower.service";
import {UserModel} from "../core/models/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private router: Router,
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ){
    matIconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('assets/github-black-circle.svg')
    );
  }

  ngOnInit(): void {

  }

  searchResultHandler(user: UserModel){
    this.router.navigate(['', user.login]);
  }

  title = 'OTP';
}

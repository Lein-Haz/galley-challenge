import {Component, OnInit} from '@angular/core';
import {GithubSearchService} from "../core/github.search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private githubSearchService: GithubSearchService){}

  ngOnInit(): void {
    this.githubSearchService.doIt();
  }
  title = 'OTP';
}

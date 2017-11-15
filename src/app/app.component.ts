import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
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

  title = 'OTP';
}

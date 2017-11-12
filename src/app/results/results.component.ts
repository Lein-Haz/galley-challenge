import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("did init");
  }

}

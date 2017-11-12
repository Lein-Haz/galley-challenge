import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'user-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  public userSearch: string;
  constructor() { }

  ngOnInit() {
  }

  searchForUser(){
    console.log("Find him");
  }

}

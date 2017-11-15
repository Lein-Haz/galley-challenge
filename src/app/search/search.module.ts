import { NgModule } from '@angular/core';
import {SearchComponent} from "./search.component";
import {FormsModule} from "@angular/forms";
import {AppMaterialModule} from "../app-material/app-material.module";
import {BrowserModule} from "@angular/platform-browser";
import {NoUserSnackComponent} from "./no-user-snack/no-user-snack.component";
import {SearchRoutingModule} from "./search-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    SearchRoutingModule
  ],
  declarations: [
    SearchComponent,
    NoUserSnackComponent
  ],
  exports: [
    SearchComponent
  ],
  entryComponents:[
    NoUserSnackComponent
  ]
})
export class SearchModule { }

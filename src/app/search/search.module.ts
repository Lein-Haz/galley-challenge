import { NgModule } from '@angular/core';
import {SearchComponent} from "./search.component";
import {FormsModule} from "@angular/forms";
import {AppMaterialModule} from "../app-material/app-material.module";
import {BrowserModule} from "@angular/platform-browser";
import {NoUserSnackComponent} from "./no-user-snack/no-user-snack.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule
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

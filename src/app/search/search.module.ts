import { NgModule } from '@angular/core';
import {SearchComponent} from "./search.component";
import {FormsModule} from "@angular/forms";
import {AppMaterialModule} from "../app-material/app-material.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule
  ],
  declarations: [
    SearchComponent
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }

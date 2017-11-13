import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from "./search.component";
import {FormsModule} from "@angular/forms";
import {AppMaterialModule} from "../app-material/app-material.module";

@NgModule({
  imports: [
    CommonModule,
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

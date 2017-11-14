import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import {ResultUserComponent} from "./user/result-user.component";
import {AppMaterialModule} from "../app-material/app-material.module";
import {ResultFollowerComponent} from "./follower/result-follower.component";

@NgModule({
  imports: [
    CommonModule,
    ResultRoutingModule,
    AppMaterialModule
  ],
  declarations: [
    ResultComponent,
    ResultUserComponent,
    ResultFollowerComponent
  ]
})
export class ResultModule { }

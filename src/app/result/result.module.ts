import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import {ResultUserComponent} from "./user/result-user.component";

@NgModule({
  imports: [
    CommonModule,
    ResultRoutingModule
  ],
  declarations: [
    ResultComponent,
    ResultUserComponent
  ]
})
export class ResultModule { }

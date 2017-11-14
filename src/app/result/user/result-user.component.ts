
import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";
import {AsyncPipe} from "@angular/common";
import {UserModel} from "../../../core/models/user.model";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'result-user',
  templateUrl: './result-user.component.html',
  styleUrls: ['./result-user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResultUserComponent implements OnInit {

  @Input()
  user: UserModel;

  ngOnInit(): void {
  }

}

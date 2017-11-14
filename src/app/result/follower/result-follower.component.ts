
import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";
import {FollowerModel} from "../../../core/models/follower.model";

@Component({
  selector: 'result-follower',
  templateUrl: './result-follower.component.html',
  styleUrls: ['./result-follower.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResultFollowerComponent implements OnInit {

  @Input()
  follower: FollowerModel;

  ngOnInit(): void {

  }

}

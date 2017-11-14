import {Component, Inject} from "@angular/core";
import {MatSnackBarRef, MAT_SNACK_BAR_DATA} from "@angular/material";
@Component({
  selector: 'no-user-snack',
  templateUrl: './no-user-snack.component.html'
})
export class NoUserSnackComponent{
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public dialogRef: MatSnackBarRef<NoUserSnackComponent>
  ){}
}

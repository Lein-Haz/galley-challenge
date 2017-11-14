import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule
  ],
  declarations: []
})
export class AppMaterialModule { }

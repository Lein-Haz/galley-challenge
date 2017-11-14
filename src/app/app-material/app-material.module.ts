import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule} from "@angular/material";

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: []
})
export class AppMaterialModule { }

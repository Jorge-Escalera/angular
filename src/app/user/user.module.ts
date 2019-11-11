import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { MatButtonModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [UserComponent]
})
export class UserModule { }

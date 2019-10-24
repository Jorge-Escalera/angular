import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';

import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [CoursesListComponent, CoursesListItemComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [CoursesListComponent]
})
export class CoursesListModule { }

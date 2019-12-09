import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { CourseBorderDirective } from './course-border.directive';

import { SearchSectionComponent } from './search-section/search-section.component';
import { MatCardModule, MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { DurationPipe } from './duration.pipe';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent,
    SearchSectionComponent,
    CourseBorderDirective,
    DurationPipe,
    SearchPipe,
    // SearchPipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
  ],
  exports: [CoursesListComponent]
})
export class CoursesListModule { }

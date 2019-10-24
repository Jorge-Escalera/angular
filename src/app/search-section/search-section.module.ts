import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerchSectionComponent } from './serch-section/serch-section.component';

import { MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [SerchSectionComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [SerchSectionComponent]
})
export class SearchSectionModule { }

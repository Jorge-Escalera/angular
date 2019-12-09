import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.sass'],
})
export class SearchSectionComponent implements OnInit {
  @Input() courses: Course[];
  @Output() filterCourses: EventEmitter<string> = new EventEmitter<string>();
  public searchInput: string;

  constructor() { }

  ngOnInit() {
  }

  onSearchClicked() {
    this.filterCourses.emit(this.searchInput);
  }

}

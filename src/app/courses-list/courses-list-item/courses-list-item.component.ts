import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.sass']
})
export class CoursesListItemComponent implements OnInit {
  @Input() course: Course;
  @Output() deleteCourse: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  onDeleteClicked(id: number) {
    this.deleteCourse.emit(id);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.sass']
})
export class CoursesListItemComponent implements OnInit {
  @Input() public course: Course;

  constructor() { }

  ngOnInit() {
  }

}

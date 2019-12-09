import { Component, OnInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import { Course } from '../course';
import { SearchPipe } from '../search.pipe';

import * as moment from 'moment';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.sass'],
  providers: [SearchPipe]
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];
  testingHooks = '';

  constructor(private search: SearchPipe) { }

  ngOnInit() {
    this.courses = [
      {
        id: 1,
        title: 'Vide Course 1. Introduction',
        creationDate: moment("2019-10-01").toString(),
        duration: 88,
        description: 'Despite the constant negative ipsum covfefe. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! Some people have an ability to write placeholder text... It\'s an art you\'re basically born with. You either have it or you don\'t.',
        topRated: true,
      },
      {
        id: 2,
        title: 'Vide Course 2. Custom Componenets',
        creationDate: moment("2019-12-01").toString(),
        duration: 90,
        description: 'I don\'t think anybody knows it was Russia that wrote Lorem Ipsum, but I don\'t know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.',
        topRated: true,
      },
      {
        id: 3,
        title: 'Vide Course 3. Custom Pipes',
        creationDate: moment("2019-12-10").toString(),
        duration: 120,
        description: 'I’m the best thing that ever happened to placeholder text. I don\'t think anybody knows it was Russia that wrote Lorem Ipsum, but I don\'t know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok?',
        topRated: false,
      },
    ];
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  //   console.log('never reached \'cause there\'s no bindings to modify the course');
  // }

  // ngDoCheck() {
  //   console.log('somethig changed');
  // }

  // ngAfterContentInit() {
  //   if(this.courses.length === 0) {
  //     console.log('courses not initialized');
  //   } else {
  //     console.log('courses initialized');
  //   }
  // }

  // ngAfterContentChecked() {
  //   console.log('after checking if something changed');
  // }

  // ngAfterViewInit() {
  //   console.log('after view has being initialized, we can use this to ensure view has been loaded and we can actually display data');
  // }

  // ngAfterViewChecked() {
  //   console.log('after the check for view changes has been completed, this could be useful to ensure heavy view updates have been completed before moving on');
  // }

  // ngOnDestroy() {
  //   console.log('useful for cleanup and prevent memory leak');
  // }

  courseEditHandler() {
    this.testingHooks = 'edit clicked';
  }

  courseDeleteHandler(event) {
    console.log(event);
  }

  coursesFilterHandler(event) {
    // console.log(event);
    this.courses = this.search.transform(this.courses, event);
  }



}

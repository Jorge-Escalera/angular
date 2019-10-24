import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.sass']
})
export class CoursesListComponent implements OnInit {

  public courses: Course[] = [
    {
      id: 1,
      title: 'Vide Course 1. Name tag',
      creationDate: '9 Nov. 2018',
      duration: '1h 28min',
      description: 'Despite the constant negative ipsum covfefe. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! Some people have an ability to write placeholder text... It\'s an art you\'re basically born with. You either have it or you don\'t.',
    },
    {
      id: 2,
      title: 'Vide Course 1. Name tag',
      creationDate: '9 Nov. 2018',
      duration: '1h 28min',
      description: 'I don\'t think anybody knows it was Russia that wrote Lorem Ipsum, but I don\'t know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.',
    },
    {
      id: 3,
      title: 'Vide Course 1. Name tag',
      creationDate: '9 Nov. 2018',
      duration: '1h 28min',
      description: 'I’m the best thing that ever happened to placeholder text. I don\'t think anybody knows it was Russia that wrote Lorem Ipsum, but I don\'t know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok?',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import * as moment from 'moment';

@Directive({
  selector: '[appCourseBorder]'
})
export class CourseBorderDirective implements OnInit {
  @Input() creationDate: string;
  private currentDate: any;
  private currentElement: ElementRef;

  constructor(elementRef: ElementRef) {
    this.currentDate = moment();
    this.currentElement = elementRef;
  }

  ngOnInit() {
    const creationDate = moment(this.creationDate);
    if (creationDate.toDate() < this.currentDate.toDate() && creationDate.toDate() >= this.currentDate.subtract(14, 'days').toDate()) {
      this.currentElement.nativeElement.classList.add('fresh');
    } else if (creationDate > this.currentDate) {
      this.currentElement.nativeElement.classList.add('upcoming');
    }
  }

}

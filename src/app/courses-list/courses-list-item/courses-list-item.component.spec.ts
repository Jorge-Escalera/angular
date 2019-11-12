import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { CoursesListItemComponent } from './courses-list-item.component';

import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';
import { By } from '@angular/platform-browser';


describe('CoursesListItemComponent (isolated test)', () => {
  let component: CoursesListItemComponent;
  let fixture: ComponentFixture<CoursesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListItemComponent],
      imports: [
        MatCardModule,
        MatButtonModule,
        MatIconModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should start with an empty course', () => {
    expect(component.course).toEqual({
      id: 0,
      title: '',
      date: '',
      duration: '',
      description: '',
    });
  });

  it('should emit on onDeleteClicked', () => {
    // spy on event emitter
    spyOn(component.deleteCourse, 'emit');

    // trigger the click
    // const nativeElement = fixture.nativeElement;
    // const button = nativeElement.querySelectorAll('button')[1];
    // button.dispatchEvent(new Event('click'));
    // button.click();

    component.course = {
      id: 0,
      title: '',
      date: '',
      duration: '',
      description: '',
    };
    component.onDeleteClicked(component.course.id);

    fixture.detectChanges();

    // expect(component.deleteCourse.emit).toHaveBeenCalledWith(id);
    expect(component.deleteCourse.emit).toHaveBeenCalled();
  });

  // it('should emit on click', () => {
  //   component.course = {
  //     id: 0,
  //     title: '',
  //     date: '',
  //     duration: '',
  //     description: '',
  //   };

  //   // spy on event emitter
  //   spyOn(component.deleteCourse, 'emit');

  //   // trigger the click
  //   // const nativeElement = fixture.nativeElement;
  //   // const button = nativeElement.querySelectorAll('button')[1];
  //   // button.dispatchEvent(new Event('click'));
  //   // button.click();
  //   const button = fixture.debugElement.queryAll(By.css('.normal'))[1];
  //   button.triggerEventHandler('click', null);

  //   fixture.detectChanges();

  //   // expect(component.deleteCourse.emit).toHaveBeenCalledWith(id);
  //   expect(component.deleteCourse.emit).toHaveBeenCalled();
  // });

  it('should show course passed to input field', () => {
    component.course = {
      id: 0,
      title: '',
      date: '',
      duration: '',
      description: '',
    };

    fixture.detectChanges();

    expect(component.course).toEqual({
      id: 0,
      title: '',
      date: '',
      duration: '',
      description: '',
    });
  });

});

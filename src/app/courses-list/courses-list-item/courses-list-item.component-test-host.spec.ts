import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { CoursesListItemComponent } from './courses-list-item.component';

import {
    MatCardModule,
    MatButtonModule,
    MatIconModule,
} from '@angular/material';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Course } from '../course';

@Component({
    selector: 'app-host-component',
    template: `
    <app-courses-list-item
        [course]="course" (deleteCourse)="onDeleted($event)">
    </app-courses-list-item>
    `
})
class TestHostComponent {
    public course: Course = {
        id: 0,
        title: '',
        creationDate: '',
        duration: 0,
        description: '',
        topRated: false,
    };
    public deletedCourse: Course;
    public onDeleted(deletedCourse: Course) { this.deletedCourse = deletedCourse; }

}

describe('CoursesListItemComponent (isolated test)', () => {
    let testHost: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CoursesListItemComponent, TestHostComponent],
            imports: [
                MatCardModule,
                MatButtonModule,
                MatIconModule,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        testHost = fixture.componentInstance;
        fixture.detectChanges();
    });

    // it('should raise course delete', () => {
    //     fixture.detectChanges();

    //     const expectedDeletedCourse = {
    //         id: 1,
    //         title: 'Vide Course 1. Name tag',
    //         creationDate: '9 Nov. 2018',
    //         duration: '1h 28min',
    //         description: 'Despite the constant negative ipsum covfefe. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! Some people have an ability to write placeholder text... It\'s an art you\'re basically born with. You either have it or you don\'t.',
    //     };

    //     const button = fixture.debugElement.queryAll(By.css('.normal'))[1];
    //     button.triggerEventHandler('click', null);

    //     expect(testHost.deletedCourse).toEqual(expectedDeletedCourse);
    // });

});
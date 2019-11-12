import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchSectionComponent } from './serch-section.component';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SerchSectionComponent', () => {
  let component: SerchSectionComponent;
  let fixture: ComponentFixture<SerchSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
      ],
      declarations: [ SerchSectionComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

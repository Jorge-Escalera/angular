import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSectionComponent } from './search-section.component';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchSectionComponent', () => {
  let component: SearchSectionComponent;
  let fixture: ComponentFixture<SearchSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
      ],
      declarations: [ SearchSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

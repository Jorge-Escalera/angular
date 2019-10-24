import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchSectionModule } from './search-section/search-section.module';
import { CoursesListModule } from './courses-list/courses-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    CoursesListModule,
    BrowserModule,
    SearchSectionModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

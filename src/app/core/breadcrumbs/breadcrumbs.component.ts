import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.sass']
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: Array<object>;
  // public breadcrumbs: object;

  constructor() { }

  ngOnInit() {
    this.breadcrumbs = [
      {text: 'Courses', href: '#'}
    ];
  }

}

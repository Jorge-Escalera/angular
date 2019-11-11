import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.sass']
})
export class LogoComponent implements OnInit {
  public imgPath: string;
  public title: string;

  constructor() { }

  ngOnInit() {
    this.imgPath = 'assets/img/courses-logo.png';
    this.title = 'VIDEO COURSE';
  }

}

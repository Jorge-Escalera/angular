import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serch-section',
  templateUrl: './serch-section.component.html',
  styleUrls: ['./serch-section.component.sass']
})
export class SerchSectionComponent implements OnInit {
  public searchInput: string;

  constructor() { }

  ngOnInit() {
  }

  onSearchClicked() {
    console.log(this.searchInput);
  }

}

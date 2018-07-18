import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mainpage-admin',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  sideMenuRequested = '';
  @Input() submenu;
  constructor() { }

  ngOnInit() {
    console.log("submenu is: ");
    console.log(this.submenu);
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contentpage',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {
  sideMenuRequested = '';
  @Input() submenu;
  constructor() { }

  ngOnInit() {
    console.log("submenu is: ");
    console.log(this.submenu);
  }

}

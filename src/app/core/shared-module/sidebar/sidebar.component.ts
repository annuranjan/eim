import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  submenu = [
    {
      title: "EIM Links",
      subMenu: ["View Employees", "Add Employee", "Edit Employees"]
    },
    {
      title: "Add more details",
      subMenu: ["Domain Name",
        "Languages", "Family Details", "Education Details", "Experience Details", "Training Details", "Nominee Details", "Salary Details"]
    },
    {
      title: "Update Profile",
      subMenu: ["Sub 1 List Item 3", "Sub 2 List Item 3", "Sub 3 List Item 3"]
    }
    ];
  // @Input() submenu;
  constructor() { }

  ngOnInit() { }

}
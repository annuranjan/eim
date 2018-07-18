import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  //variable to get the employee to edit it.
  emp;

  addEmpForm: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const urlArray = this.router.url.split('/');

    this.addEmpForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'middleName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'domainName': new FormControl(null, Validators.required),
    });
    // if (urlArray[urlArray.length - 1] === "editEmployee") {
    //   //get the employee here to edit it.
    //   this.addEmpForm.setValue({
    //     'firstName': this.emp.firstName,
    //     'middleName': this.emp.middleName,
    //     'lastName': this.emp.lastName,
    //     'email': this.emp.email,
    //     'domainName': this.emp.domainName
    //   });
    // }
  }


}

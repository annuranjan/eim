import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-misc-details',
  templateUrl: './misc-details.component.html',
  styleUrls: ['./misc-details.component.css']
})
export class MiscDetailsComponent implements OnInit {

  // { path: "domainName", component: MiscDetailsComponent },
  // { path: "languages", component: MiscDetailsComponent },
  // { path: "trainingDetails", component: MiscDetailsComponent },
  // { path: "salaryDetails", component: MiscDetailsComponent },
  // { path: "familyDetails", component: MiscDetailsComponent }

  miscForm: FormGroup;
  constructor() { }

  ngOnInit() {
    //Initialize the grid with the values already fed by the user.
    this.miscForm = new FormGroup({
      "domainName": new FormControl(null, /*validator based on whether the user already */),
      "salary": new FormControl(),
      "languages": new FormArray([
        new FormControl(null, Validators.required)
      ]),
      "trainingDetails": new FormArray([])
    });
  }

  onFormSubmit() {
    console.log(this.miscForm.value);
  }
  addALanguage() {
    (<FormArray>this.miscForm.get('languages')).push(new FormControl(null, Validators.required));
  }
  onDeleteLanguage(index: number) {
    (<FormArray>this.miscForm.get('languages')).removeAt(index)
  }
  addATraining() {
    (<FormArray>this.miscForm.get('trainingDetails')).push(new FormControl(null, Validators.required));
  }
  onDeleteATraining(index: number) {
    (<FormArray>this.miscForm.get('trainingDetails')).removeAt(index);
  }
}

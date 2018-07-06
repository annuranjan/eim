import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { SharedModule } from '../core/shared-module/shared.module';
import { MainPageComponent } from './main-page/main-page.component';
import { EimComponent } from './submenus/eim/eim.component';
import { ReportsComponent } from './submenus/reports/reports.component';
import { AddEmployeeComponent } from './submenus/eim/add-employee/add-employee.component';
import { RouterModule } from '@angular/router';


//REmove at later

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [AdminComponent, MainPageComponent, EimComponent, ReportsComponent, AddEmployeeComponent]
})
export class AdminModule { }

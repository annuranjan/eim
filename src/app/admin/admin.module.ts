import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { SharedModule } from '../core/shared-module/shared.module';
import { EimComponent } from './submenus/eim/eim.component';
import { ReportsComponent } from './submenus/reports/reports.component';
import { AddEmployeeComponent } from './submenus/eim/add-employee/add-employee.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ViewEmployeesComponent } from './submenus/eim/view-employees/view-employees.component';
import { AdminProcessReportComponent } from './submenus/reports/admin-process-report/admin-process-report.component';
import { ManagerProcessReportComponent } from './submenus/reports/manager-process-report/manager-process-report.component';
import { EmployeeProcessReportComponent } from './submenus/reports/employee-process-report/employee-process-report.component';
import { MiscDetailsComponent } from './submenus/eim/misc-details/misc-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    EimComponent,
    ReportsComponent,
    AddEmployeeComponent,
    ViewEmployeesComponent,
    AdminProcessReportComponent,
    ManagerProcessReportComponent,
    EmployeeProcessReportComponent,
    MiscDetailsComponent
  ]
})
export class AdminModule { }

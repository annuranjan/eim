import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { AdminModule } from '../admin/admin.module';
import { EmployeeComponent } from '../employee/employee.component';
import { ManagerComponent } from '../manager/manager.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "adminHome", component: AdminComponent, loadChildren: () => AdminModule },
  { path: 'empHome', component: EmployeeComponent },
  { path: 'managerHome', component: ManagerComponent }
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { AdminModule } from '../admin/admin.module';

const appRoutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent/*, loadChildren: '../admin/admin.module#AdminModule' */}
  // { path: "admin", component: AdminComponent, loadChildren: 'src/app/admin/admin.module#AdminModule' }
  // { path: "admin", component: AdminComponent, loadChildren: () => AdminModule }
  // { path: "adm", redirectTo: "/admin", pathMatch: "/" }
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

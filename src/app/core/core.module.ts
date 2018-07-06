import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoreRoutingModule } from './core-routing.module';
import { AuthService } from './auth.service';
import { AppService } from './app.service';
import { AdminModule } from '../admin/admin.module';
import { SharedModule } from './shared-module/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    CoreRoutingModule,
    HttpClientModule,
    AdminModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    LoginComponent,
    NotFoundComponent,
  ],
  exports: [],
  providers: [AuthService, AppService]
})
export class CoreModule { }

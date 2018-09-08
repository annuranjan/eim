import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../core/app.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  adminNavbarMenu = ['Admin', 'EIM', 'Reports', 'Leave', 'Track Employee', 'Contact Book'];
  sideMenuRequested;
  navMenuSubscription: Subscription;
  // admin = ['Admin', 'EIM', 'Reports', 'Leave', 'Track Employee'];
  // manager = ['Admin', 'EIM', 'Time Registration', 'Contact Book', 'Reports'];
  // employee = ['Time Registration', 'Leave'];

  constructor(private appServ: AppService) { }

  ngOnInit() {
    this.navMenuSubscription = this.appServ.getNavMenuSub().
      subscribe(result => {
        this.sideMenuRequested = result;
      });
  }

  ngOnDestroy() {
    this.navMenuSubscription.unsubscribe();
  }
}

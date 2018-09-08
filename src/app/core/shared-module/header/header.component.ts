import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() navbarMenu: string[];
  userType;

  constructor(
    private authServ: AuthService,
    private appServ: AppService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

  }

  onHomeClick() {
    const url = this.authServ.getUserType() + 'Home'
    this.router.navigate([url]);
  }

  onNavClick(menuItem: string) {
    this.appServ.sendNavMenuSub(menuItem);
    // const url = '/' + this.authServ.getUserType() + '/' + menuItem.replace(/\s+/g, '').toLowerCase();
    const url = menuItem.replace(/\s+/g, '').toLowerCase();
    this.router.navigate([url], { relativeTo: this.route });
  }

}

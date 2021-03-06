import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { SidebarMenus } from './sidebar/sidebar-menu';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, SidebarComponent, ContentPageComponent],
  exports: [HeaderComponent, SidebarComponent, ContentPageComponent],
  providers: [SidebarMenus]
})
export class SharedModule { }

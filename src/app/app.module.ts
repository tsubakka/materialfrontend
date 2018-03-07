import { ButtonsModule } from './views/buttons/buttons.module';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GridListDemoComponent } from './views/grid-list/grid-list-demo';

import { AppRoutingModule } from './app.routing';

import { Router } from '@angular/router';

import {
  SidenavComponent,
  AppSidebarNavItemComponent,
  AppSidebarNavTitleComponent,
  AppSidebarNavLinkComponent,
  AppSidebarNavDropdownComponent,

} from './components/sidenav';

import { NavbarComponent } from './components/navbar/navbar.component';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {

};


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AppSidebarNavTitleComponent,
    AppSidebarNavItemComponent,
    AppSidebarNavLinkComponent,
    AppSidebarNavDropdownComponent,

    NavbarComponent,
    GridListDemoComponent

  ],
  imports: [
    ButtonsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    PerfectScrollbarModule, // .forRoot(PERFECT_SCROLLBAR_CONFIG),


    // DashboardModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

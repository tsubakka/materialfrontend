
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ButtonsComponent } from './views/buttons/buttons/buttons.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,

    SidenavComponent,
    AppSidebarNavTitleComponent,
    AppSidebarNavItemComponent,
    AppSidebarNavLinkComponent,
    AppSidebarNavDropdownComponent,

    NavbarComponent,
    GridListDemoComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
   // DashboardModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

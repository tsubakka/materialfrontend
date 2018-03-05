import { GridListDemoComponent } from './views/grid-list/grid-list-demo';
// import { AppRoutingModule } from './../../../frontend/src/app/app.routing';
/*
import { AppSidebarMinimizerComponent } from './components/app-sidebar-minimizer/app-sidebar-minimizer.component';
import { AppSidebarFooterComponent } from './components/app-sidebar-footer/app-sidebar-footer.component';
import { AppSidebarFormComponent } from './components/app-sidebar-form/app-sidebar-form.component';
import { AppSidebarHeaderComponent } from './components/app-sidebar-header/app-sidebar-header.component';
import {
  AppSidebarNavComponent,
  AppSidebarNavLinkComponent,
  AppSidebarNavItemComponent,
  AppSidebarNavDropdownComponent,
  AppSidebarNavTitleComponent
} from './components/app-sidebar-nav';
*/

import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './views/buttons/buttons/buttons.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';





@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    SidenavComponent,
    NavbarComponent,
    GridListDemoComponent
   /* AppSidebarNavComponent,
    AppSidebarHeaderComponent,
    AppSidebarFormComponent,
    AppSidebarFooterComponent,
    AppSidebarMinimizerComponent,
    AppSidebarNavTitleComponent,
    AppSidebarNavItemComponent,
    AppSidebarNavDropdownComponent,
    AppSidebarNavLinkComponent
*/


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
    // AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

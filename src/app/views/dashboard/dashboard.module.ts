import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/*import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';*/

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../../material.module';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    MaterialModule
  //  ChartsModule,
  //  BsDropdownModule,
  //  ButtonsModule.forRoot()
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }

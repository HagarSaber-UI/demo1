import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardSalesComponent } from './dashboard-sales.component';
import { ModalsModule, WidgetsModule, CardsModule } from '../../_metronic/partials';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { SharedModule } from "./../../_metronic/shared/shared.module";
import { DropdownMenusModule } from '../../_metronic/partials';
import { NgApexchartsModule } from 'ng-apexcharts';
import {NgbCalendar,NgbDate,NgbDatepickerModule,NgbDateStruct,NgbInputDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [DashboardSalesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardSalesComponent,
      },
    ]),
    WidgetsModule,
    ModalsModule,
    CardsModule,
    InlineSVGModule,
    SharedModule,
    DropdownMenusModule,
    NgApexchartsModule,
    NgbDatepickerModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule

    
  ],
})
export class DashboardSalesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ModalsModule, WidgetsModule, CardsModule } from '../../_metronic/partials';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { SharedModule } from "./../../_metronic/shared/shared.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
    WidgetsModule,
    ModalsModule,
    CardsModule,
    InlineSVGModule,
    SharedModule
  ],
})
export class DashboardModule {}

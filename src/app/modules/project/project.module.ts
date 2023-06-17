import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { OverviewComponent } from './overview/overview.component';
import { TeamComponent } from './team/team.component';
import { TasksComponent } from './tasks/tasks.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ProfileRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { BillingComponent } from './billing/billing.component';
import {
  CardsModule,
  DropdownMenusModule,
  WidgetsModule,
} from '../../_metronic/partials';
import { SharedModule } from '../../_metronic/shared/shared.module';

@NgModule({
  declarations: [
    ProjectComponent,
    OverviewComponent,
    TeamComponent,
    TasksComponent,
    ScheduleComponent,
    BillingComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    InlineSVGModule,
    DropdownMenusModule,
    WidgetsModule,
    CardsModule,
    SharedModule,
  ],
})
export class ProjectModule {}

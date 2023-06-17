import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { TasksComponent } from './tasks/tasks.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TeamComponent } from './team/team.component';
import { ProjectComponent } from './project.component';
import { BillingComponent } from './billing/billing.component';
import { NotesComponent } from './notes/notes.component';
import { FilesComponent } from './files/files.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'team',
        component: TeamComponent,
      },
      {
        path: 'tasks',
        component: TasksComponent,
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
      },
      {
        path: 'billing',
        component: BillingComponent,
      },
      {
        path: 'notes',
        component: NotesComponent,
      },
      {
        path: 'files',
        component: FilesComponent,
      },
      {
        path: 'quotes',
        component: QuotesComponent,
      },
      
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: '**', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}

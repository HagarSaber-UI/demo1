import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { VendorComponent } from './vendor.component';
import { LogsComponent } from './logs/logs.component';


const routes: Routes = [
  {
    path: '',
    component: VendorComponent,
    children: [
      {
        path: 'info',
        component: InfoComponent,
      },
      {
        path: 'logs',
        component: LogsComponent,
      },
      // {
      //   path: 'settings',
      //   component: SettingsComponent,
      // },
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: '**', redirectTo: 'info', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorRoutingModule {}

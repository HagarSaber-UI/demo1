import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguagesComponent } from './languages/languages.component';
import { QuoteComponent } from './quote.component';
import { QuoteProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path: '',
    component: QuoteComponent,
    children: [
      {
        path: 'languages',
        component: LanguagesComponent,
      },
      {
        path: 'project',
        component: QuoteProjectComponent,
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
export class QuoteRoutingModule {}

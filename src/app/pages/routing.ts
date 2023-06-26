import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./contacts/contacts.module').then((m) => m.ContactsModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'projects/project',
    loadChildren: () =>
      import('../modules/project/project.module').then((m) => m.ProjectModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'quotes/quote',
    loadChildren: () =>
      import('../modules/quotes//quote/quote.module').then((m) => m.QuoteModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'vendors/vendor',
    loadChildren: () =>
      import('../modules/vendors/vendor/vendor.module').then((m) => m.VendorModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'projects/projects',
    loadChildren: () =>
      import('../modules/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
    data: { layout: "'dark-header' , 'light-sidebar'" },
  },
  {
    path: 'crafted/pages/wizards',
    loadChildren: () =>
      import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
    data: { layout: 'light-header' },
  },
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };

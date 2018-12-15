import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import {CanActive} from './shared/services/CanActive';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'pages/index',
    pathMatch: 'full',
    canActivate: [CanActive]
   },
  {
    path: '**',
    redirectTo: 'pages/index', canActivate: [CanActive]
  }
];

export const routing = RouterModule.forRoot(appRoutes);

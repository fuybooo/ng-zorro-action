import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule',
    data: {
      title: 'login'
    }
  },
  {
    path: 'main',
    loadChildren: 'app/main/main.module#MainModule'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/login'
  }
];

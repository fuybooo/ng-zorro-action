import {Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {AuthGuardService} from '../shared/guard/auth-guard.service';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        loadChildren: 'app/main/user/user.module#UserModule'
      },
    ]
  },
];

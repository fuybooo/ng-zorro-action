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
        loadChildren: 'app/main/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'user',
        loadChildren: 'app/main/user/user.module#UserModule'
      },
      {
        path: 'device',
        loadChildren: 'app/main/device/device.module#DeviceModule'
      },
      {
        path: 'example',
        loadChildren: 'app/main/example/example.module#ExampleModule'
      },
      {
        path: 'work',
        loadChildren: 'app/main/work/work.module#WorkModule'
      },
      {
        path: 'mall',
        loadChildren: 'app/main/mall/mall.module#MallModule'
      },
    ]
  },
];

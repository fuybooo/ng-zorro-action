import {Routes} from '@angular/router';
import {DeviceComponent} from './device.component';

export const deviceRoutes: Routes = [
  {
    path: '',
    component: DeviceComponent,
    data: {
      title: '设备管理'
    }
  },
];

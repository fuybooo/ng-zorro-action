import {Routes} from '@angular/router';
import {MallComponent} from './mall.component';

export const mallRoutes: Routes = [
  {
    path: '',
    component: MallComponent,
    data: {
      title: '商城'
    }
  },
];

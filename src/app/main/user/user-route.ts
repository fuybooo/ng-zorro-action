import {Routes} from '@angular/router';
import {UserComponent} from './user.component';

export const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    data: {
      title: '用户管理'
    }
  },
];

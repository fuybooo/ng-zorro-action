import {Routes} from '@angular/router';
import {WorkComponent} from './work.component';

export const workRoutes: Routes = [
  {
    path: '',
    component: WorkComponent,
    data: {
      title: '工作列表'
    }
  },
];

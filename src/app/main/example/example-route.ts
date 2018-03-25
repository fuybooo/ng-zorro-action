import {Routes} from '@angular/router';
import {ExampleComponent} from './example.component';
import {AuthGuardService} from '../../shared/guard/auth-guard.service';
import {ExampleTableComponent} from './example-table/example-table.component';
import {ExampleFormComponent} from './example-form/example-form.component';

export const exampleRoutes: Routes = [
  {
    path: '',
    component: ExampleComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: ExampleTableComponent,
        data: {
          title: '组件 - 表格'
        }
      },
      {
        path: 'form',
        component: ExampleFormComponent,
        data: {
          title: '组件 - 表单'
        }
      },
    ]
  },
];

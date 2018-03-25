import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptorService} from '../../core/http-interceptor.service';
import {WorkComponent} from './work.component';
import {workRoutes} from './work-route';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(workRoutes)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
  ],
  entryComponents: [
  ],
  declarations: [WorkComponent]
})
export class WorkModule { }

import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptorService} from '../../core/http-interceptor.service';
import {dashboardRoutes} from './dashboard-route';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
  ],
  entryComponents: [
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }

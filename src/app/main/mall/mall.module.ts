import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptorService} from '../../core/http-interceptor.service';
import {MallComponent} from './mall.component';
import {mallRoutes} from './mall-route';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(mallRoutes)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
  ],
  entryComponents: [
  ],
  declarations: [MallComponent]
})
export class MallModule { }

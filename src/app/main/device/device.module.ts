import { NgModule } from '@angular/core';
import { DeviceComponent } from './device.component';
import {RouterModule} from '@angular/router';
import {HttpInterceptorService} from '../../core/http-interceptor.service';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { DeviceTableComponent } from './device-table/device-table.component';
import {deviceRoutes} from './device-route';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(deviceRoutes)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
  ],
  entryComponents: [
  ],
  declarations: [DeviceComponent, DeviceTableComponent]
})
export class DeviceModule { }

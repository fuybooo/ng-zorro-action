import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginResetPasswordComponent } from './login-reset-password/login-reset-password.component';
import {RouterModule} from '@angular/router';
import {loginRoutes} from './login-route';
import {SharedModule} from '../shared/shared.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptorService} from '../core/http-interceptor.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(loginRoutes)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
  ],
  declarations: [LoginComponent, LoginResetPasswordComponent]
})
export class LoginModule { }

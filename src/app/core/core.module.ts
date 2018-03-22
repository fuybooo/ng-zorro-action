import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_MESSAGE_CONFIG} from 'ng-zorro-antd';
import {HttpInterceptorService} from './http-interceptor.service';
import {CoreService} from './core.service';
import {ModalService} from './modal.service';
import {UtilService} from './util.service';
import {UserService} from '../main/user/user.service';
import {LoginService} from '../login/login.service';
import {AuthGuardService} from '../shared/guard/auth-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [],
  providers: [
    // ng-zorro的全局设置
    {provide: NZ_MESSAGE_CONFIG, useValue: { nzMaxStack: 1} },
    // http拦截器
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
    // 必要的全局服务
    CoreService,
    ModalService,
    UtilService,
    UserService,
    LoginService,
    AuthGuardService,
  ]
})
export class CoreModule { }

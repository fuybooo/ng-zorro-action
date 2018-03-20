import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from './component/table/table.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonClickDirective} from './directive/button-click.directive';

@NgModule({
  imports: [
    // 官方模块
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // 第三方模块
    NgZorroAntdModule,
  ],
  declarations: [
    TableComponent,
    ButtonClickDirective,
  ],
  exports: [
    // 官方模块
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // 第三方模块
    NgZorroAntdModule,
    // 本地
    TableComponent,
  ]
})
export class SharedModule { }

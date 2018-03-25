import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SharedModule} from '../../shared/shared.module';
import {exampleRoutes} from './example-route';
import {HttpInterceptorService} from '../../core/http-interceptor.service';
import {ExampleComponent} from './example.component';
import { ExampleTableComponent } from './example-table/example-table.component';
import { ExampleFormComponent } from './example-form/example-form.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(exampleRoutes)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ],
  declarations: [ExampleComponent, ExampleTableComponent, ExampleFormComponent]
})
export class ExampleModule { }

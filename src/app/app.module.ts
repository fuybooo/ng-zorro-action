import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {appRoutes} from './app-route';
import {CoreModule} from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './common/navbar/navbar.component';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { Test1Component } from './test1/test1.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './state/reducers/app.reducer';
import {ProductEffects} from './state/effects/product.effects';
import { ProductService } from './services/productService';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ProductEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

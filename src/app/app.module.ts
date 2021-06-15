import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {GoogleAuth} from '@codetrix-studio/capacitor-google-auth';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {SafePipe} from './Filter/safe.pipe'
import {HomePageModule} from './checked-out/home.module'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,HomePageModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [UniqueDeviceID, OneSignal,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],

})
export class AppModule {}

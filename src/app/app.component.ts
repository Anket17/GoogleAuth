import { Component, NgZone, ViewChild } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth'; // capacitor v3
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { IonRouterOutlet, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, { static : true }) routerOutlet: IonRouterOutlet;
  constructor(private router: Router, private zone: NgZone, private oneSignal: OneSignal,   private platform: Platform,
    ) {
    this.initializeApp();
    this.platform.backButton.subscribeWithPriority(-1, () => {
      // if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      // }
    })
    
    GoogleAuth.init();
  }
  initializeApp() {

    
  
    //Deep Link Implementation
    App.addListener('appUrlOpen', (data: any) => {
      this.zone.run(() => {
        // Example url: https://beerswift.app/tabs/tab2
        // slug = /tabs/tab2
        const slug = data.url.split(".app").pop();
        if (slug) {
          this.router.navigateByUrl(slug);
        }
        // If no match, do nothing - let regular routing
        // logic take over
      });
    });


    //OneSignal Push Notification
    this.oneSignal.startInit('424dbeeb-6fd1-46c6-8532-349724028bca', '566464682351');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
      data => this.onPushReceived(data.payload)
    });
    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
      data => this.onPushOpened(data.notification.payload)
    });

    this.oneSignal.endInit();
    this.oneSignal.getIds().then((id) => {
      console.log(id);
   
    });

  }

  onPushReceived(data: any){
    console.log('Received')
  }
  onPushOpened(data: any){
    console.log('Opened')
  }

}

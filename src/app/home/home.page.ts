import { Component } from '@angular/core';
import {GoogleAuth} from '@codetrix-studio/capacitor-google-auth';
//import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userInfo : any;
 
  constructor() { }
 
  googleSignup() {
    GoogleAuth.init()
    const googleUser =  GoogleAuth.signIn() as any;
    console.log('my user: ', googleUser);
    this.userInfo = googleUser;
  }

  twitterSignup(){

  }

}

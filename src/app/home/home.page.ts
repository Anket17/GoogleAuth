import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {GoogleAuth} from '@codetrix-studio/capacitor-google-auth';
//import { url } from 'inspector';
//import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  userInfo : any;
 public userDetails:any;
  constructor(private router: Router) { }
 
  ngOnInit(): void {
 
  }


 


  // twitterSignup(){

  // }

}

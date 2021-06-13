import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {GoogleAuth} from '@codetrix-studio/capacitor-google-auth';
import { NavController } from '@ionic/angular';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  userInfo : any;
 public userDetails:any;
  constructor(private router: Router, private navController: NavController) { }
  ngOnInit() {
    const storage = localStorage.getItem('gAuth');
    if(storage){
      this.userDetails = JSON.parse(storage)
      this.router.navigateByUrl('/dashboard').then();

    } else {
      this.router.navigateByUrl('').then();
    }
   // this.googleSignup();
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter')
    const storage = localStorage.getItem('gAuth');
    if(storage){
      this.userDetails = JSON.parse(storage)
      this.router.navigateByUrl('/dashboard').then();

    } else {
      this.router.navigateByUrl('').then();
    }
  }

  ionViewWillEnter(){
    console.log('ionViewwillEnter')
    const storage = localStorage.getItem('gAuth');
    if(storage){
      this.userDetails = JSON.parse(storage)
      this.router.navigateByUrl('/dashboard').then();

    } else {
      this.router.navigateByUrl('').then();
    }
  }

  async googleSignup() {
    GoogleAuth.init();
    const googleUser = await GoogleAuth.signIn();
    console.log('my user: ', googleUser);
    this.userInfo = googleUser;
    localStorage.setItem('gAuth', JSON.stringify(googleUser))
    this.ionViewWillEnter()
   // this.router.navigateByUrl('/dashboard').then();
  }
}

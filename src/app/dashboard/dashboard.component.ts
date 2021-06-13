import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GoogleAuth} from '@codetrix-studio/capacitor-google-auth';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
public userDetails: any[];
  constructor(private router: Router) { }

  ngOnInit(): void {
    const storage = localStorage.getItem('gAuth');
    if(storage){
      this.userDetails = JSON.parse(storage)
    } else {

    }
  }
   
 async onCheckOut(){
  this.router.navigateByUrl('checkout');

  }
  async onBCheckOut(){
    Browser.open(
      {url: 'https://gravyt.in'})
//this.router.navigateByUrl('checkout');
  
    }

  
  signOut(){
    localStorage.removeItem('gAuth');
    this.router.navigateByUrl('');
    GoogleAuth.signOut();
  }

}

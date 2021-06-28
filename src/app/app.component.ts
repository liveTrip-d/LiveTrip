import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import{AuthGuard}from './services/auth.guard';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-root' ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})



export class AppComponent {
  title = 'myLivetrip';
  icon:string="assests/images/icon.png"
  flight:string="assests/images/flight.png"
  travel:string="assests/images/travel.jpg"
  mapgo:string="assests/images/mapgo.jpg"
  food:string="assests/images/food.jpg"
  video:string="assests/images/video.jpg"
  header:string="assets/images/header1.jpg"

  navbarOpen = false;
  profile:boolean;
  loginSignUp:boolean;
  constructor(private afAuth: AngularFireAuth){
    this.profile = false;
  this.afAuth.onAuthStateChanged((user) => {              ///////////////////admin dashboard 
        if (user) {
            this.profile = true;
            this.loginSignUp =false;
        } else {
            this.profile = false;
            this.loginSignUp =true;
        }
    });   }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  async logoutUser(){
    try {
        await this.afAuth.signOut();
    } catch (error) {
        console.log('Auth Service: logout error...');
        console.log('error code', error.code);
        console.log('error', error);
        if (error.code)
            return error;
    }
}
  
}

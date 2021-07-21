import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

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

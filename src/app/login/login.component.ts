import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isProgressVisible: boolean;
  loginForm: FormGroup;
  firebaseErrorMessage: string;

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth) {

      this.isProgressVisible = false;

      this.loginForm = new FormGroup({
          'email': new FormControl('', [Validators.required, Validators.email]),
          'password': new FormControl('', Validators.required)
      });

      this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
      if (this.authService.userLoggedIn) {                       // if the user's logged in, navigate them to the dashboard (NOTE: don't use afAuth.currentUser -- it's never null)
          this.router.navigate(['/profile']);
      }
  }

  loginUser() {
      this.isProgressVisible = true;                          // show the progress indicator as we start the Firebase login process

      if (this.loginForm.invalid)
          return;

      this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).then((result) => {
          this.isProgressVisible = false;                     // no matter what, when the auth service returns, we hide the progress indicator
          if (result == null) {                               // null is success, false means there was an error
              console.log('logging in...');
              this.router.navigate(['/profile']);                // when the user is logged in, navigate them to dashboard
          }
          else if (result.isValid == false) {
              console.log('login error', result);
              this.firebaseErrorMessage = result.message;
          }
      });
  }

  googleLogin(){


    const googleprov= new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleprov).then((result) => {
        if (result == null)                                 // null is success, false means there was an error
            this.router.navigate(['/home']);


        this.isProgressVisible = false;                     // no matter what, when the auth service returns, we hide the progress indicator
    }).catch(() => {
        this.isProgressVisible = false;
    });;
    console.log('google success');
    this.router.navigate(['/home']);


}




faceBookSignin(){


    const faceBookAuthProvider= new firebase.auth.FacebookAuthProvider();
    this.afAuth.signInWithPopup(faceBookAuthProvider).then((result) => {
        if (result == null)                                 // null is success, false means there was an error
            this.router.navigate(['/home']);


        this.isProgressVisible = false;                     // no matter what, when the auth service returns, we hide the progress indicator
    }).catch(() => {
        this.isProgressVisible = false;
    });;
    console.log('face success');
    this.router.navigate(['/home']);


}
}

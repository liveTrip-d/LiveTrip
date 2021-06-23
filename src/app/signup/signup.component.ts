
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})





export class SignupComponent implements OnInit {

    isProgressVisible: boolean;
    signupForm!: FormGroup;
    firebaseErrorMessage: string;


  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth, private afs: AngularFirestore) {

    this.isProgressVisible = false;
    this.firebaseErrorMessage = '';

  }




ngOnInit(): void {
    if (this.authService.userLoggedIn) {                       // if the user's logged in, navigate them to the dashboard (NOTE: don't use afAuth.currentUser -- it's never null)
        this.router.navigate(['/home']);
    }
    this.signupForm = new FormGroup({
        'firstName': new FormControl('', Validators.required),
        
        'lastName': new FormControl('', Validators.required),
        'phoneNumber': new FormControl('',Validators.required),

        'email': new FormControl('', [Validators.required, Validators.email]),
        'password': new FormControl('', Validators.required)
    });

}

signup() {
    if (this.signupForm.invalid)                            // if there's an error in the form, don't submit it
        return;

    this.isProgressVisible = true;
    this.authService.signupUser(this.signupForm.value).then((result) => {
        if (result == null)                                 // null is success, false means there was an error
            this.router.navigate(['/home']);
        else if (result.isValid == false)
            this.firebaseErrorMessage = result.message;

        this.isProgressVisible = false;                     // no matter what, when the auth service returns, we hide the progress indicator
    }).catch(() => {
        this.isProgressVisible = false;
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
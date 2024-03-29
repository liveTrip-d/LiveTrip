import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';






@Injectable({
  providedIn: 'root'
}
)

export class AuthService {
  [x: string]: any;

  userLoggedIn: boolean;      // other components can check on this variable for the login status of the user

  constructor(private router: Router, private afAuth: AngularFireAuth, private afs: AngularFirestore) {
      
    
    this.userLoggedIn = false;
        
    this.afAuth.onAuthStateChanged((user) => {              // set up a subscription to always know the login status of the user
          if (user) {
              this.userLoggedIn = true;
          } else {
              this.userLoggedIn = false;
          }
      });
  }

  loginUser(email: string, password: string): Promise<any> {
      return this.afAuth.signInWithEmailAndPassword(email, password)
          .then(() => {
              console.log('Auth Service: loginUser: success');
              this.router.navigate(['/home']);
          })
          .catch(error => {
            console.log(error)
            throw error
          });
        //ctsx
        // .catch(error => {
        //     console.log('Auth Service: login error...');
        //     console.log('error code', error.code);
        //     console.log('error', error);
        //     if (error.code)
        //         return { isValid: false, message: error.message };
        // });
  }

  signupUser(user: any): Promise<any> {
      return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
          .then((res) => {
              let emailLower = user.email.toLowerCase();

              this.afs.doc('/users/'+emailLower )    //      emailLower              // on a successful signup, create a document in 'users' collection with the new user's info
                  .set({
                      firstName: user.firstName,
                      lastName: user.lastName,
                      phoneNumber:user.phoneNumber,
                      firstName_lower: user.firstName.toLowerCase(),
                      email_lower: emailLower,
                  })
                  .catch(error => {
                    console.log(error)
                    throw error
                  });
                        //ctsx
        //   .catch(error => {
        //       console.log('Auth Service: login error...');
        //       console.log('error code', error.code);
        //       console.log('error', error);
        //       if (error.code)
        //           return { isValid: false, message: error.message };
        //   });

                  // result.user.sendEmailVerification();                    // immediately send the user a verification email
          })

  }



  resetPassword(email: string): Promise<any> {
      return this.afAuth.sendPasswordResetEmail(email)
          .then(() => {
              console.log('Auth Service: reset password success');
              // this.router.navigate(['/home']);
          })
          .catch(error => {
              console.log('Auth Service: reset password error...');
              console.log(error.code);
              console.log(error)
              if (error.code)
                  return error;
          });
  }



  logoutUser(): Promise<void> {
      return this.afAuth.signOut()
          .then(() => {
              this.router.navigate(['/home']);                    // when we log the user out, navigate them to home
          })
          .catch(error => {
              console.log('Auth Service: logout error...');
              console.log('error code', error.code);
              console.log('error', error);
              if (error.code)
                  return error;
          });
  }

  setUserInfo(payload: object) {
      console.log('Auth Service: saving user info...');
      this.afs.collection('users')
          .add(payload).then(function (res) {
              console.log("Auth Service: setUserInfo response...")
              console.log(res);
          })
  }

  getCurrentUser() {
      return this.afAuth.currentUser;                                 // returns user object for logged-in users, otherwise returns null 
  }




      

    
}

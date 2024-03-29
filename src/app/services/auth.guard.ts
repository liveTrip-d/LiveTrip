import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';

import {MatDialog} from '@angular/material/dialog';

import { Component } from '@angular/core';



@Injectable({
  providedIn: 'root'
})



export class AuthGuard implements CanActivate {
  
  constructor(private router: Router, private afAuth: AngularFireAuth,public dialog: MatDialog){ }    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    return new Promise((resolve, reject) => {
        this.afAuth.onAuthStateChanged((user) => {
            if (user) {

                // if (!user.emailVerified)                            // if the user hasn't verified their email, send them to that page
                //     this.router.navigate(['/verify-email']);

                resolve(true);
            } else {
                console.log('Auth Guard: user is not logged in');
                this.router.navigate(['/home']);  
                // alert("Sign up to use our site and to share your videos be part of our  family ^_^") ;  // a logged out user will always be sent to home

                  let dialogRef=this.dialog.open(DialogContentExampleDialog,{panelClass: 'dialog-container-custom', 

                        height: '400px',
                        width: '550px',
            

          });
                  


                       
                            
            }
                
                resolve(false);
        }
        );
    });
}


}

@Component({
  selector:'dialog-content-example-dialog',
  templateUrl:'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {

}

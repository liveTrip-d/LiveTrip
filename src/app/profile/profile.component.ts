import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



    user!: Observable<any>; // Example: store the user's info here (Cloud Firestore: collection is 'users', docId is the user's email, lower case)
              // Example: store the user's info here (Cloud Firestore: collection is 'users', docId is the user's email, lower case)

constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {
    // this.user = null;
}

ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
        console.log('Dashboard: user', user);

        if (user) {
            // let emailLower = user.email.toLowerCase();
            this.user = this.firestore.collection('users').doc(user.email?.toLowerCase()).valueChanges();
        }
    });
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

















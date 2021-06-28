import { Component, OnInit,Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import firebase from "firebase/app";
import {FileService} from '../services/upload-service'
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    videoList: any[];
    userId:string;
    @Input() fileUpload!:FileService["dataSet"];
    rowIndexArray: any[];


    user!: Observable<any>; 
    list!: Observable<any>;
constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private service:AuthService,private fileService: FileService) {
    // this.user = null;
}

ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {

        if (user) {
            this.user = this.firestore.collection('users').doc(user.email?.toLowerCase()).valueChanges();
        }
    });
 
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.userId = user.uid;  
      console.log(this.userId);
      this.fileService.getImageDetailList().snapshotChanges().pipe(//////////////////////// getfiles(6)

    map(changes =>
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    )
  ).subscribe((fileUploads :any)=> {
      
    this.videoList = fileUploads;
    
  });

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
getUserId(){
    const user = this.service.getCurrentUser();
firebase.auth().onAuthStateChanged((user) => {
    if (user) {

      var uid = user.uid;
      console.log(uid);
    } else {

    }
  });
}
}


















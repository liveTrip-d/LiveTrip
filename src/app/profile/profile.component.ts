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
    empty :number=0;
    emp  :boolean;
    vid :boolean;
    @Input() fileUpload!:FileService["dataSet"];
    
    user!: Observable<any>; // Example: store the user's info here (Cloud Firestore: collection is 'users', docId is the user's email, lower case)
              // Example: store the user's info here (Cloud Firestore: collection is 'users', docId is the user's email, lower case)
constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private service:AuthService,private fileService: FileService) {
    // this.user = null;
}

ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
        // console.log('Dashboard: user', user);

        if (user) {
            // let emailLower = user.email.toLowerCase();
            this.user = this.firestore.collection('users').doc(user.email?.toLowerCase()).valueChanges();
        }
    });
   

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.userId = user.uid;  
      // console.log(this.userId);
      this.fileService.getImageDetailList().snapshotChanges().pipe(//////////////////////// getfiles(6)

    map(changes =>
      // store the key
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    )
  ).subscribe((fileUploads :any)=> {
      
    this.videoList = fileUploads;
    for (let i = 0; i < this.videoList.length; i++) {        
    // console.log(this.videoList[36].userId);
    if (this.videoList[i].userId== this.userId) {
      this.empty++;      
    }
    }
    if (this.empty>0) {
      this.emp=true;
      this.vid=false;
    }
    else{
      this.emp=false;
      this.vid=true;
    }
    console.log(this.empty);
  });
    }     
  });
}


}


















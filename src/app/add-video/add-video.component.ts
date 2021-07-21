import { Component, Inject } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";
import {FileService} from '../services/upload-service'//////////////////Upload srvice/////////////
import { countries } from '../country-data-store';
import { AuthService } from '../services/auth.service';
import firebase from "firebase/app";

import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})



export class AddVideoComponent{

  //added
  public countries:any = countries
//added

    selectedImage: any = null;
    url!: string;
    city!: string;
    file!: string;
    usrId:string;
    citySearch!:string;
    catagorySearch!:string;

    country!: string;
    description!: string;
    catagory!: string;
    language!:string;
    
    constructor(private storage: AngularFireStorage,private fileService: FileService,public dialog: MatDialog) { }
    ngOnInit() {
      this.fileService.getImageDetailList();
    }
  
  
  
    showPreview(event: any) {
      this.selectedImage = event.target.files[0];
    }
    save() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.usrId = user.uid;
          console.log(this.usrId);
          // ...
        } 
      });
      var name = this.selectedImage.name;
      const fileRef = this.storage.ref(name);
      this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.url = url;
            this.fileService.insertImageDetails(this.usrId,this.city,this.url,this.country,this.description,this.catagory,this.language);
            // alert('Upload Successful');
            let dialogRef=this.dialog.open(DialogContentExampleDialogSuccessfull,{panelClass: 'dialog-container-custom', 

            height: '400px',
            width: '550px',


});
window.setTimeout(function(){location.reload()},3000)
          })
        })
      ).subscribe();
    }
    view(){
      this.fileService.getImage(this.citySearch,this.catagorySearch);
    }
  
  }
  @Component({
    selector:'dialog-elements-example-dialog-successful',
    templateUrl:'dialog-elements-example-dialog-successful.html',
  })
  export class DialogContentExampleDialogSuccessfull {
  
  }
  
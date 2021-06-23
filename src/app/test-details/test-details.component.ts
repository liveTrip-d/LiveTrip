import { Component, OnInit ,Input, Inject, Injectable} from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

import{FileService}from '../services/upload-service';

import { AngularFireAuth } from '@angular/fire/auth';




@Injectable({
  providedIn: 'any'
})

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {
  [x: string]: any;
  @Input() fileUpload!:FileService["dataSet"];/////////////////////added 1/5


admin:boolean; /////////////////admin dashboard 
  constructor(private afAuth: AngularFireAuth,private fileservice:FileService) {
    this.admin = false;
        
    this.afAuth.onAuthStateChanged((user) => {              ///////////////////admin dashboard 
          if (user?.email=="ameero.474@gmail.com"||user?.email=="duhaki@post.jce.ac.il") {
              this.admin = true;
          } else {
              this.admin = false;
          }
      });   }

  ngOnInit(): void {
  }

  deleteFileUpload(fileUpload:FileService["dataSet"]): void {
    this.fileservice.deleteFile(fileUpload);
  
  }
  


  @ViewChild('videoPlayer')
  videoplayer!: ElementRef;

toggleVideo() {
    this.videoplayer.nativeElement.play();
}
}



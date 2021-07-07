import { Injectable, Inject, Input } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../services/auth.service';
import firebase from "firebase/app";
import { AppModule } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  [x: string]: any;

  // @Input() fileUpload!:FileService["dataSet"];

  imageDetailList!: AngularFireList<any>;
  fileList: any[] = [];
  dataSet: Data = {
    userId:'',
    id:'',
    url:'',
    city:'',
    description:'',
    catagory:'',
    language:''


  };

  file24?: any[];

  msg:string = 'error';
  constructor(@Inject(AngularFireDatabase) private firebase: AngularFireDatabase) { }
  getImageDetailList() {
    return this.imageDetailList = this.firebase.list('videoDetails');
  }
// 
  insertImageDetails(userId:string,id: string,url: string,city:string,description:string,catagory:string,language:string) {
    this.dataSet = {
      userId:userId,
      id : id,
      url: url,
      city:city,
      description:description,
      catagory:catagory,
      language:language


    };
    this.imageDetailList.push(this.dataSet);
  }
  getImage(value1: string,value2:string){/////change 24/4
    this.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.fileList = list.map(item => { return item.payload.val();  });

        this.fileList.forEach(element => {
          if(element.city===value1 && element.catagory==value2)//change 24/4
             this.msg = element.url;
        });

        if(this.msg==='error')
          alert('No record found');
        else{


          console.log();
          window.open(this.msg);////////////

          
          this.msg = 'error';
        }
      }
    );
  }
//////////////////delete video///////////////////////////////////
  deleteFile(fileUpload:FileService["dataSet"]): void {

    this.deleteFileDatabase(fileUpload.key)

      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key:string): Promise<void> {
    return this.firebase.list('videoDetails').remove(key)
  }
///////////////////////////////////////////////////////////////


}
export interface Data{
  [x: string]: any;
  userId:string;
  id:string;
  url:string;
  city:string;
  description:string;
  catagory:string;
  language:string;


}


import { Component, Inject } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";
import {FileService} from '../services/upload-service'//////////////////Upload srvice/////////////
import { countries } from '../country-data-store';



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
    id!: string;
    file!: string;

    citySearch!:string;
    catagorySearch!:string;

    city!: string;
    description!: string;
    catagory!: string;
    language!:string;
    
    constructor(private storage: AngularFireStorage,private fileService: FileService) { }
    ngOnInit() {
      this.fileService.getImageDetailList();
    }
  
  
  
    showPreview(event: any) {
      this.selectedImage = event.target.files[0];
    }
    save() {
      var name = this.selectedImage.name;
      const fileRef = this.storage.ref(name);
      this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.url = url;
            this.fileService.insertImageDetails(this.id,this.url,this.city,this.description,this.catagory,this.language);
            alert('Upload Successful');
          })
        })
      ).subscribe();
    }
    view(){
      this.fileService.getImage(this.citySearch,this.catagorySearch);
    }
  
  }
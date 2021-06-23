import { Component, Injectable, OnInit } from '@angular/core';
import{FileService}from'../services/upload-service';
import { map } from 'rxjs/operators';
import { countries } from '../country-data-store';////added



@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
@Injectable()
export class HotelsComponent implements OnInit {




//added
public countries:any = countries
//added


  language_search!: string;
  city_search!:string;
  fileUploads?: any[];

  constructor(private fileservice:FileService) { }




  ngOnInit(): void {
    this.fileservice.getImageDetailList().snapshotChanges().pipe(//////////////////////// getfiles(6)

    map(changes =>
      // store the key
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    )
  ).subscribe(fileUploads => {
    this.fileUploads = fileUploads;
  });

   
  }
  map_enter = false;
  vid=true;
  language_enter=false;
  city_enter=false;
  mapClick() {
    this.map_enter = true;
    this.vid=false;

  }
  vidClick(){
    this.map_enter = false;
    this.vid=true;
    
  }
  langClick(){
    this.language_enter=true;
    this.map_enter = false;
    this.vid=false;
    this.city_enter=false;

  }
  cityClick(){
    this.map_enter = false;
    this.vid=false;
    this.language_enter=false;
    this.city_enter=true;
    }
}

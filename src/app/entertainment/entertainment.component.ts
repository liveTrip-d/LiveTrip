import { Component, OnInit } from '@angular/core';
import{FileService}from'../services/upload-service';

import { map } from 'rxjs/operators';
import { countries } from '../country-data-store';////added

import { MapsAPILoader } from '@agm/core';




@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  //added
  public countries:any = countries
//added

  fileUploads?: any[];

  language_search!: string;
  city_search!:string;

  latitude!: number;
  longitude!: number;
  zoom!: number;
  address!: string;
  geoCoder!: google.maps.Geocoder;



  constructor(private fileservice:FileService,private mapsAPILoader: MapsAPILoader) {
  }




  ngOnInit(): void {
    this.fileservice.getImageDetailList().snapshotChanges().pipe(//////////////////////// getfiles(6)

      map(changes =>
        // store the key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });

    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
    });

   
  }


  map_enter = false;
  language_enter=false;
  city_enter=false;
  all_vid=false;
  current_vid=true;



  mapClick() {
    this.map_enter = true;
    this.current_vid=false;

  }
  vidClick(){
    this.map_enter = false;
    this.all_vid=true;
    this.language_enter=false;
    this.city_enter=false;
    this.current_vid=false;


  }
  langClick(){
    this.language_enter=true;
    this.map_enter = false;
    this.current_vid=false;
    this.city_enter=false;

  }
  cityClick(){
  this.map_enter = false;
  this.current_vid=false;
  this.language_enter=false;
  this.city_enter=true;
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }
  
  getAddress(latitude: number, longitude: number) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 15;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    
    });
  }

  


}

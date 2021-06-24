import { Component, Injectable, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { NgZone } from '@angular/core';




@Component({
  selector: 'app-map',
  templateUrl:'./map.component.html',
  styleUrls: ['./map.component.css']
})
@Injectable()

export class MapComponent implements OnInit {



  latitude!: number;
  longitude!: number;
  zoom!: number;
  address!: any;
  geoCoder!: google.maps.Geocoder;

  constructor(private mapsAPILoader: MapsAPILoader,private ngZone: NgZone) { }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
  });
  }
  setCurrentLocation() {/////private
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
 

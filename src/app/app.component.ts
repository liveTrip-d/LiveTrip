import { Component } from '@angular/core';


@Component({
  selector: 'app-root' ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})



export class AppComponent {
  title = 'myLivetrip';
  icon:string="assests/images/icon.png"
  flight:string="assests/images/flight.png"
  travel:string="assests/images/travel.jpg"
  mapgo:string="assests/images/mapgo.jpg"
  food:string="assests/images/food.jpg"
  video:string="assests/images/video.jpg"
  header:string="assets/images/header1.jpg"

  navbarOpen = false;
  

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


  
}

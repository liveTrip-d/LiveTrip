import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  holyc() {
    console.log("clicked");
  }

  searchClick(){
      alert("search clicked")
    }
  restClick(){
      alert("rest clicked")
    }
    travelClick(){
      alert("travel clicked")
    }
    holyClick(){
      alert("holy clicked")
    }
    videoClick(){
      alert("video clicked")
    }
    guideClick(){
      alert("guide click")
    }
    mapClick(){
      alert("map clicked")
    }
    vibesClick(){
      alert("vibes clicked")
    }

}

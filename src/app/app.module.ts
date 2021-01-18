import { HomeComponent } from './home/home.component';
import { HolyComponent } from './holy/holy.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import{MatToolbarModule} from'@angular/material/toolbar';
import{MatExpansionModule} from'@angular/material/expansion';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotelsComponent } from './hotels/hotels.component';
import { ResturantsComponent } from './resturants/resturants.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TravelingComponent } from './traveling/traveling.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HolyComponent,
    HotelsComponent,
    ResturantsComponent,
    EntertainmentComponent,
    TravelingComponent,
    AddVideoComponent,
    SignupComponent,
    
   
    
],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserModule,
    RouterModule.forRoot([  
      {path:'home',component:HomeComponent},
      {path:'holy',component:HolyComponent},
      {path:'hotels',component:HotelsComponent},
      {path:'resturants',component:ResturantsComponent},
      {path:'traveling',component:TravelingComponent},
      {path:'addVideo',component:AddVideoComponent},
      {path:'entertainment',component:EntertainmentComponent},
      { path: '',   redirectTo: '/home', pathMatch: 'full' }
    ])
],

 
  providers: [
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

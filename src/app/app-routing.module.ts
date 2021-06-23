import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TravelingComponent } from './traveling/traveling.component';
import { ResturantsComponent } from './resturants/resturants.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HomeComponent } from './home/home.component';
import { HolyComponent } from './holy/holy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVideoComponent } from './add-video/add-video.component';

import{AuthGuard}from './services/auth.guard';



import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileComponent } from './profile/profile.component';
import { MapComponent } from './map/map.component';
import { GuideServiceComponent } from './guide/guide-service.component';











const routes:Routes =[ 
  {path:'home',component:HomeComponent},
  {path:'holy',component:HolyComponent},
  {path:'hotels',component:HotelsComponent},
  {path:'resturants',component:ResturantsComponent},
  {path:'traveling',component:TravelingComponent},
  {path:'addVideo',component:AddVideoComponent,canActivate : [AuthGuard]},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'profile',component:ProfileComponent,canActivate : [AuthGuard]},
  {path:'map',component:MapComponent},

  { path: 'pass', component: ForgotPasswordComponent },

  { path: 'guide', component: GuideServiceComponent },








  


  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



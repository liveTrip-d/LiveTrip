import { EntertainmentComponent } from './entertainment/entertainment.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { TravelingComponent } from './traveling/traveling.component';
import { ResturantsComponent } from './resturants/resturants.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { HolyComponent } from './holy/holy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes =[ 
  {path:'home',component:HomeComponent},
  {path:'holy',component:HolyComponent},
  {path:'hotels',component:HotelsComponent},
  {path:'resturants',component:ResturantsComponent},
  {path:'traveling',component:TravelingComponent},
  {path:'addVideo',component:AddVideoComponent},
  {path:'entertainment',component:EntertainmentComponent},

  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



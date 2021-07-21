import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';

import{FormsModule} from '@angular/forms';


import { CommonModule } from '@angular/common';  


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import {AuthService}from'./services/auth.service';
import{AuthGuard}from './services/auth.guard';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HolyComponent } from './holy/holy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotelsComponent } from './hotels/hotels.component';
import { ResturantsComponent } from './resturants/resturants.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TravelingComponent } from './traveling/traveling.component';
import { SignupComponent } from './signup/signup.component';
import{LoginComponent}from'./login/login.component';
import{AddVideoComponent}from'./add-video/add-video.component';

import{ProfileComponent}from './profile/profile.component';



import{MapComponent}from './map/map.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { HeaderComponent } from './header/header.component';





import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import {MatInputModule} from '@angular/material/input';
import{MatToolbarModule} from'@angular/material/toolbar';
import{MatExpansionModule} from'@angular/material/expansion';
import { MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';


import { ReactiveFormsModule } from '@angular/forms';
import { TestDetailsComponent } from './test-details/test-details.component';

import { AgmCoreModule } from '@agm/core';

import{environment}from'../environments/environment';
import { FileService } from './services/upload-service';















@NgModule({
  declarations: [
    AppComponent,
    HolyComponent,
    HotelsComponent,
    ResturantsComponent,
    EntertainmentComponent,
    TravelingComponent,
    AddVideoComponent,
    MapComponent,






    SignupComponent,
    LoginComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    TestDetailsComponent,
    HeaderComponent
  


    
    
   
    
],
  imports: [

    AngularFireModule.initializeApp(environment.firebaseConfig),

    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage




    AgmCoreModule.forRoot({
      apiKey:"AIzaSyAx2x6sMQvxomKdWzAvYK1LzaODAV1bmf8"
    
    }),
    MatSelectCountryModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,

    ReactiveFormsModule,
    CommonModule,




    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserModule,
    MatCardModule,
    RouterModule.forRoot([  
      {path:'home',component:HomeComponent},
      {path:'holy',component:HolyComponent},
      {path:'hotels',component:HotelsComponent},
      {path:'resturants',component:ResturantsComponent},
      {path:'traveling',component:TravelingComponent},
      {path:'addVideo',component:AddVideoComponent,canActivate : [AuthGuard]},
      {path:'entertainment',component:EntertainmentComponent},

      { path: '',   redirectTo: '/home', pathMatch: 'full' }
    ])
],

 
  providers: [
    AuthService,
    FileService,
    AuthGuard,
    MapComponent,
    

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

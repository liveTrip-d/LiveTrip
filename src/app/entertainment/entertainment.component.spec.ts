import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { AppModule } from '../app.module';
import { FileService } from '../services/upload-service';

import { EntertainmentComponent } from './entertainment.component';


describe('EntertainmentComponent', () => {
  let component: EntertainmentComponent;
  let fixture: ComponentFixture<EntertainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainmentComponent ],
      providers: [
         AngularFireDatabase,AngularFireModule,AngularFireStorage,AngularFirestore
      ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

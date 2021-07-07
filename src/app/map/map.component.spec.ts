import { AgmCoreModule } from '@agm/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapComponent ],


      imports: [
         AgmCoreModule.forRoot({
          apiKey:"AIzaSyAx2x6sMQvxomKdWzAvYK1LzaODAV1bmf8"
        
        })]

        
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

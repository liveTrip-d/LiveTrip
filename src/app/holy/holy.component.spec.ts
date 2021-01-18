import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HolyComponent } from './holy.component';

describe('HolyComponent', () => {
  let component: HolyComponent;
  let fixture: ComponentFixture<HolyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

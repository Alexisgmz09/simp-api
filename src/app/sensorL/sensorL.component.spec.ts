import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorLComponent } from './sensorL.component';

describe('SensorLComponent', () => {
  let component: SensorLComponent;
  let fixture: ComponentFixture<SensorLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

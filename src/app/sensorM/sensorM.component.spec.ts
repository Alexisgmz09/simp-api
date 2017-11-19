import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorMComponent } from './sensorM.component';

describe('SensorMComponent', () => {
  let component: SensorMComponent;
  let fixture: ComponentFixture<SensorMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

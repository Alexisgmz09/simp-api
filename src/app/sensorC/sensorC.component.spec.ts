import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorCComponent } from './sensorC.component';

describe('SensorCComponent', () => {
  let component: SensorCComponent;
  let fixture: ComponentFixture<SensorCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

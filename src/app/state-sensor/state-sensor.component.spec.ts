import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateSensorComponent } from './state-sensor.component';

describe('StateSensorComponent', () => {
  let component: StateSensorComponent;
  let fixture: ComponentFixture<StateSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

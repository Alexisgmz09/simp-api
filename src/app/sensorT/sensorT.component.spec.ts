import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorTComponent } from './sensorT.component';

describe('SensorTComponent', () => {
  let component: SensorTComponent;
  let fixture: ComponentFixture<SensorTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuatorCComponent } from './actuatorC.component';

describe('ActuatorCComponent', () => {
  let component: ActuatorCComponent;
  let fixture: ComponentFixture<ActuatorCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuatorCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuatorCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuatorAComponent } from './actuatorA.component';

describe('ActuatorAComponent', () => {
  let component: ActuatorAComponent;
  let fixture: ComponentFixture<ActuatorAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuatorAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuatorAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

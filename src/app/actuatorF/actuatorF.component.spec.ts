import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuatorFComponent } from './actuatorF.component';

describe('ActuatorFComponent', () => {
  let component: ActuatorFComponent;
  let fixture: ComponentFixture<ActuatorFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuatorFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuatorFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

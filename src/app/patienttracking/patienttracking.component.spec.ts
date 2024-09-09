import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienttrackingComponent } from './patienttracking.component';

describe('PatienttrackingComponent', () => {
  let component: PatienttrackingComponent;
  let fixture: ComponentFixture<PatienttrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatienttrackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatienttrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

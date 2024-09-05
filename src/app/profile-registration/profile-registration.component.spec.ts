import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRegistrationComponent } from './profile-registration.component';

describe('ProfileRegistrationComponent', () => {
  let component: ProfileRegistrationComponent;
  let fixture: ComponentFixture<ProfileRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

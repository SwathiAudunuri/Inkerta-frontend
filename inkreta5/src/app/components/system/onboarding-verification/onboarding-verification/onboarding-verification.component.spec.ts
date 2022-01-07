import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingVerificationComponent } from './onboarding-verification.component';

describe('OnboardingVerificationComponent', () => {
  let component: OnboardingVerificationComponent;
  let fixture: ComponentFixture<OnboardingVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

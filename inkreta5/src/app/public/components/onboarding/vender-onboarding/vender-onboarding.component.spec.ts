import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderOnboardingComponent } from './vender-onboarding.component';

describe('VenderOnboardingComponent', () => {
  let component: VenderOnboardingComponent;
  let fixture: ComponentFixture<VenderOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderOnboardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContactInfoComponent } from './profile-contact-info.component';

describe('ProfileContactInfoComponent', () => {
  let component: ProfileContactInfoComponent;
  let fixture: ComponentFixture<ProfileContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileContactInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

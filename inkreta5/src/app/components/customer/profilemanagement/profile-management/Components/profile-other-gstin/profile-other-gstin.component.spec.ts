import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOtherGstinComponent } from './profile-other-gstin.component';

describe('ProfileOtherGstinComponent', () => {
  let component: ProfileOtherGstinComponent;
  let fixture: ComponentFixture<ProfileOtherGstinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileOtherGstinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileOtherGstinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

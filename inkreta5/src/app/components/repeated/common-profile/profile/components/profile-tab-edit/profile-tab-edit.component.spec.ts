import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTabEditComponent } from './profile-tab-edit.component';

describe('ProfileTabEditComponent', () => {
  let component: ProfileTabEditComponent;
  let fixture: ComponentFixture<ProfileTabEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTabEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTabEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

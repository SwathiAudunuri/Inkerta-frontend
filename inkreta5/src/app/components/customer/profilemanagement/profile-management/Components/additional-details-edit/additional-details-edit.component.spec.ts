import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalDetailsEditComponent } from './additional-details-edit.component';

describe('AdditionalDetailsEditComponent', () => {
  let component: AdditionalDetailsEditComponent;
  let fixture: ComponentFixture<AdditionalDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalDetailsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

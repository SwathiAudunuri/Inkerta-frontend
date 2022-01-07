import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalDetails2Component } from './additional-details2.component';

describe('AdditionalDetails2Component', () => {
  let component: AdditionalDetails2Component;
  let fixture: ComponentFixture<AdditionalDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalDetails2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

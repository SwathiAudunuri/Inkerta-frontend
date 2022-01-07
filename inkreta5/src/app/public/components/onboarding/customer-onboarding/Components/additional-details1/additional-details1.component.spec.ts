import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalDetails1Component } from './additional-details1.component';

describe('AdditionalDetails1Component', () => {
  let component: AdditionalDetails1Component;
  let fixture: ComponentFixture<AdditionalDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalDetails1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

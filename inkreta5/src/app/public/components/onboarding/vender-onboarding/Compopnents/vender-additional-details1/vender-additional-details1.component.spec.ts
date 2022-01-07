import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderAdditionalDetails1Component } from './vender-additional-details1.component';

describe('VenderAdditionalDetails1Component', () => {
  let component: VenderAdditionalDetails1Component;
  let fixture: ComponentFixture<VenderAdditionalDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderAdditionalDetails1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderAdditionalDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

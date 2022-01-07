import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderAdditionalDetails2Component } from './vender-additional-details2.component';

describe('VenderAdditionalDetails2Component', () => {
  let component: VenderAdditionalDetails2Component;
  let fixture: ComponentFixture<VenderAdditionalDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderAdditionalDetails2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderAdditionalDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

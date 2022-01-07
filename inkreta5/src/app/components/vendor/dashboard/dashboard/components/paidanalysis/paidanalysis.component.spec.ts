import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidanalysisComponent } from './paidanalysis.component';

describe('PaidanalysisComponent', () => {
  let component: PaidanalysisComponent;
  let fixture: ComponentFixture<PaidanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidanalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeanalysisComponent } from './disputeanalysis.component';

describe('DisputeanalysisComponent', () => {
  let component: DisputeanalysisComponent;
  let fixture: ComponentFixture<DisputeanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeanalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

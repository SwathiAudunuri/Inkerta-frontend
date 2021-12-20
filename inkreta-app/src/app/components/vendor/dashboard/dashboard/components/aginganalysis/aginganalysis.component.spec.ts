import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AginganalysisComponent } from './aginganalysis.component';

describe('AginganalysisComponent', () => {
  let component: AginganalysisComponent;
  let fixture: ComponentFixture<AginganalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AginganalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AginganalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

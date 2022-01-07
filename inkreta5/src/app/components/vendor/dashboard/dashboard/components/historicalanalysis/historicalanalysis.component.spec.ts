import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalanalysisComponent } from './historicalanalysis.component';

describe('HistoricalanalysisComponent', () => {
  let component: HistoricalanalysisComponent;
  let fixture: ComponentFixture<HistoricalanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalanalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

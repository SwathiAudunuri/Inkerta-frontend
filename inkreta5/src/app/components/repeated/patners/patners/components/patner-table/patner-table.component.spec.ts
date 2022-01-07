import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatnerTableComponent } from './patner-table.component';

describe('PatnerTableComponent', () => {
  let component: PatnerTableComponent;
  let fixture: ComponentFixture<PatnerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatnerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatnerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

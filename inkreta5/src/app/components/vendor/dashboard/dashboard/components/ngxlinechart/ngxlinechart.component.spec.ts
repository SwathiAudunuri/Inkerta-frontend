import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxlinechartComponent } from './ngxlinechart.component';

describe('NgxlinechartComponent', () => {
  let component: NgxlinechartComponent;
  let fixture: ComponentFixture<NgxlinechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxlinechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxlinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

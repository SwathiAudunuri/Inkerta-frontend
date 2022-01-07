import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstinDetailsComponent } from './gstin-details.component';

describe('GstinDetailsComponent', () => {
  let component: GstinDetailsComponent;
  let fixture: ComponentFixture<GstinDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstinDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GstinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

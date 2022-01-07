import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartitalUpdateStatusComponent } from './partital-update-status.component';

describe('PartitalUpdateStatusComponent', () => {
  let component: PartitalUpdateStatusComponent;
  let fixture: ComponentFixture<PartitalUpdateStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartitalUpdateStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartitalUpdateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

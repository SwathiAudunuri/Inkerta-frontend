import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarlineComponent } from './barline.component';

describe('BarlineComponent', () => {
  let component: BarlineComponent;
  let fixture: ComponentFixture<BarlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

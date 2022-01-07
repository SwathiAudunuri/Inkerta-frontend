import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendormappingviewComponent } from './vendormappingview.component';

describe('VendormappingviewComponent', () => {
  let component: VendormappingviewComponent;
  let fixture: ComponentFixture<VendormappingviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendormappingviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendormappingviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

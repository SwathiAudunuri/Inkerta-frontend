import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierBuyerComponent } from './supplier-buyer.component';

describe('SupplierBuyerComponent', () => {
  let component: SupplierBuyerComponent;
  let fixture: ComponentFixture<SupplierBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierBuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

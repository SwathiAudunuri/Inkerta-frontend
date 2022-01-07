import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidInvoiceSidenavComponent } from './paid-invoice-sidenav.component';

describe('PaidInvoiceSidenavComponent', () => {
  let component: PaidInvoiceSidenavComponent;
  let fixture: ComponentFixture<PaidInvoiceSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidInvoiceSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidInvoiceSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

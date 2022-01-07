import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartitalPaidInvoiceSidenavComponent } from './partital-paid-invoice-sidenav.component';

describe('PartitalPaidInvoiceSidenavComponent', () => {
  let component: PartitalPaidInvoiceSidenavComponent;
  let fixture: ComponentFixture<PartitalPaidInvoiceSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartitalPaidInvoiceSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartitalPaidInvoiceSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

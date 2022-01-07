import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostforpaymentInvoiceSidenavComponent } from './postforpayment-invoice-sidenav.component';

describe('PostforpaymentInvoiceSidenavComponent', () => {
  let component: PostforpaymentInvoiceSidenavComponent;
  let fixture: ComponentFixture<PostforpaymentInvoiceSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostforpaymentInvoiceSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostforpaymentInvoiceSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

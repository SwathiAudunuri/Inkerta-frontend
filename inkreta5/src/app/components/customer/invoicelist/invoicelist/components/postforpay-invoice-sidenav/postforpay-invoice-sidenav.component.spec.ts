import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostforpayInvoiceSidenavComponent } from './postforpay-invoice-sidenav.component';

describe('PostforpayInvoiceSidenavComponent', () => {
  let component: PostforpayInvoiceSidenavComponent;
  let fixture: ComponentFixture<PostforpayInvoiceSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostforpayInvoiceSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostforpayInvoiceSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

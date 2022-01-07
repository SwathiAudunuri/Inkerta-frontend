import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceQrcodePopupComponent } from './invoice-qrcode-popup.component';

describe('InvoiceQrcodePopupComponent', () => {
  let component: InvoiceQrcodePopupComponent;
  let fixture: ComponentFixture<InvoiceQrcodePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceQrcodePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceQrcodePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

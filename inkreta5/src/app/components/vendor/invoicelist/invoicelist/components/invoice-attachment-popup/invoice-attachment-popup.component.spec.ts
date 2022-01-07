import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceAttachmentPopupComponent } from './invoice-attachment-popup.component';

describe('InvoiceAttachmentPopupComponent', () => {
  let component: InvoiceAttachmentPopupComponent;
  let fixture: ComponentFixture<InvoiceAttachmentPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceAttachmentPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceAttachmentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

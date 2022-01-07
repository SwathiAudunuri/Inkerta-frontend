import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDocumentPopupComponent } from './invoice-document-popup.component';

describe('InvoiceDocumentPopupComponent', () => {
  let component: InvoiceDocumentPopupComponent;
  let fixture: ComponentFixture<InvoiceDocumentPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDocumentPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDocumentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

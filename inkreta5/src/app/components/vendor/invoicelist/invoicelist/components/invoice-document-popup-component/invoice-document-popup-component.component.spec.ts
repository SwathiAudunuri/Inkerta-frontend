import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDocumentPopupComponentComponent } from './invoice-document-popup-component.component';

describe('InvoiceDocumentPopupComponentComponent', () => {
  let component: InvoiceDocumentPopupComponentComponent;
  let fixture: ComponentFixture<InvoiceDocumentPopupComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDocumentPopupComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDocumentPopupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

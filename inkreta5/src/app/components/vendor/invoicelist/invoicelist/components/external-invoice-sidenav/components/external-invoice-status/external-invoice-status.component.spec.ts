import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalInvoiceStatusComponent } from './external-invoice-status.component';

describe('ExternalInvoiceStatusComponent', () => {
  let component: ExternalInvoiceStatusComponent;
  let fixture: ComponentFixture<ExternalInvoiceStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalInvoiceStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalInvoiceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

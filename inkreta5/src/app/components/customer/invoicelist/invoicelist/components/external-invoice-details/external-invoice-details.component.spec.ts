import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalInvoiceDetailsComponent } from './external-invoice-details.component';

describe('ExternalInvoiceDetailsComponent', () => {
  let component: ExternalInvoiceDetailsComponent;
  let fixture: ComponentFixture<ExternalInvoiceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalInvoiceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalInvoiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

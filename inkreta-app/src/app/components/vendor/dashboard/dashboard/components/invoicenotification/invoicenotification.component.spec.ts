import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicenotificationComponent } from './invoicenotification.component';

describe('InvoicenotificationComponent', () => {
  let component: InvoicenotificationComponent;
  let fixture: ComponentFixture<InvoicenotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicenotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxInvoiceComponent } from './inbox-invoice.component';

describe('InboxInvoiceComponent', () => {
  let component: InboxInvoiceComponent;
  let fixture: ComponentFixture<InboxInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

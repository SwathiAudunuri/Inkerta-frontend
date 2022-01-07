import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDiscardComponent } from './invoice-discard.component';

describe('InvoiceDiscardComponent', () => {
  let component: InvoiceDiscardComponent;
  let fixture: ComponentFixture<InvoiceDiscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDiscardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDiscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

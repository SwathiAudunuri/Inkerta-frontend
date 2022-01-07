import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceInlineComponent } from './invoice-inline.component';

describe('InvoiceInlineComponent', () => {
  let component: InvoiceInlineComponent;
  let fixture: ComponentFixture<InvoiceInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceInlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

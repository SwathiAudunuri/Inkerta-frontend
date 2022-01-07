import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceQueriesComponent } from './invoice-queries.component';

describe('InvoiceQueriesComponent', () => {
  let component: InvoiceQueriesComponent;
  let fixture: ComponentFixture<InvoiceQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceQueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

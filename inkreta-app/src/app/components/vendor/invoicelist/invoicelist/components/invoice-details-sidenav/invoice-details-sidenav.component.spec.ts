import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailsSidenavComponent } from './invoice-details-sidenav.component';

describe('InvoiceDetailsSidenavComponent', () => {
  let component: InvoiceDetailsSidenavComponent;
  let fixture: ComponentFixture<InvoiceDetailsSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailsSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailsSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedInvoiceSidenavComponent } from './approved-invoice-sidenav.component';

describe('ApprovedInvoiceSidenavComponent', () => {
  let component: ApprovedInvoiceSidenavComponent;
  let fixture: ComponentFixture<ApprovedInvoiceSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedInvoiceSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedInvoiceSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

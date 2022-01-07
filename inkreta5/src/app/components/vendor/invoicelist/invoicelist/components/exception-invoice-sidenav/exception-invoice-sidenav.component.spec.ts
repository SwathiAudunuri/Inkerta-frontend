import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionInvoiceSidenavComponent } from './exception-invoice-sidenav.component';

describe('ExceptionInvoiceSidenavComponent', () => {
  let component: ExceptionInvoiceSidenavComponent;
  let fixture: ComponentFixture<ExceptionInvoiceSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExceptionInvoiceSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionInvoiceSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

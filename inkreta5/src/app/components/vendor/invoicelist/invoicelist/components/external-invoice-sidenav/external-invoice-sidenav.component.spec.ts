import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalInvoiceSidenavComponent } from './external-invoice-sidenav.component';

describe('ExternalInvoiceSidenavComponent', () => {
  let component: ExternalInvoiceSidenavComponent;
  let fixture: ComponentFixture<ExternalInvoiceSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalInvoiceSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalInvoiceSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

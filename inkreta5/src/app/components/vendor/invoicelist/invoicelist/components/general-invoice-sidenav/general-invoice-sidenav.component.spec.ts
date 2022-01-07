import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInvoiceSidenavComponent } from './general-invoice-sidenav.component';

describe('GeneralInvoiceSidenavComponent', () => {
  let component: GeneralInvoiceSidenavComponent;
  let fixture: ComponentFixture<GeneralInvoiceSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInvoiceSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInvoiceSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

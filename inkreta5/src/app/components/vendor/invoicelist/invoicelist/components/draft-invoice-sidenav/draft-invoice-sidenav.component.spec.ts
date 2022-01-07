import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftInvoiceSidenavComponent } from './draft-invoice-sidenav.component';

describe('DraftInvoiceSidenavComponent', () => {
  let component: DraftInvoiceSidenavComponent;
  let fixture: ComponentFixture<DraftInvoiceSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftInvoiceSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftInvoiceSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDeatilsAuditComponent } from './supplier-deatils-audit.component';

describe('SupplierDeatilsAuditComponent', () => {
  let component: SupplierDeatilsAuditComponent;
  let fixture: ComponentFixture<SupplierDeatilsAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierDeatilsAuditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierDeatilsAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

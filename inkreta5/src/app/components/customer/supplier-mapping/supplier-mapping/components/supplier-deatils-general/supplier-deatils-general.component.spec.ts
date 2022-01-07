import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDeatilsGeneralComponent } from './supplier-deatils-general.component';

describe('SupplierDeatilsGeneralComponent', () => {
  let component: SupplierDeatilsGeneralComponent;
  let fixture: ComponentFixture<SupplierDeatilsGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierDeatilsGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierDeatilsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

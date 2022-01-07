import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorselectiondialogComponent } from './vendorselectiondialog.component';

describe('VendorselectiondialogComponent', () => {
  let component: VendorselectiondialogComponent;
  let fixture: ComponentFixture<VendorselectiondialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorselectiondialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorselectiondialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

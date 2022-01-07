import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceUploadFormNoComponent } from './invoice-upload-form-no.component';

describe('InvoiceUploadFormNoComponent', () => {
  let component: InvoiceUploadFormNoComponent;
  let fixture: ComponentFixture<InvoiceUploadFormNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceUploadFormNoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceUploadFormNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

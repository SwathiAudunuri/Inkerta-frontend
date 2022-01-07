import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceUploadFormComponent } from './invoice-upload-form.component';

describe('InvoiceUploadFormComponent', () => {
  let component: InvoiceUploadFormComponent;
  let fixture: ComponentFixture<InvoiceUploadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceUploadFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

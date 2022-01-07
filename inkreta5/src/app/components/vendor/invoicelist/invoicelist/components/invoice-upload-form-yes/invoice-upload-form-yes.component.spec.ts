import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceUploadFormYesComponent } from './invoice-upload-form-yes.component';

describe('InvoiceUploadFormYesComponent', () => {
  let component: InvoiceUploadFormYesComponent;
  let fixture: ComponentFixture<InvoiceUploadFormYesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceUploadFormYesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceUploadFormYesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

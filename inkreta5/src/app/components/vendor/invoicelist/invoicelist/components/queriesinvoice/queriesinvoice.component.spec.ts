import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueriesinvoiceComponent } from './queriesinvoice.component';

describe('QueriesinvoiceComponent', () => {
  let component: QueriesinvoiceComponent;
  let fixture: ComponentFixture<QueriesinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueriesinvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueriesinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

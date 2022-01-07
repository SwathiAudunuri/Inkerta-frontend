import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustVerifydocumensComponent } from './cust-verifydocumens.component';

describe('CustVerifydocumensComponent', () => {
  let component: CustVerifydocumensComponent;
  let fixture: ComponentFixture<CustVerifydocumensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustVerifydocumensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustVerifydocumensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

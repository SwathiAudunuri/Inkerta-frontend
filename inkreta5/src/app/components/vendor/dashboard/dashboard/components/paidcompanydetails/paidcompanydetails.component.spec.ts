import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidcompanydetailsComponent } from './paidcompanydetails.component';

describe('PaidcompanydetailsComponent', () => {
  let component: PaidcompanydetailsComponent;
  let fixture: ComponentFixture<PaidcompanydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidcompanydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidcompanydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

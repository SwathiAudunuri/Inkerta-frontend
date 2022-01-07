import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwayBillDetailsComponent } from './eway-bill-details.component';

describe('EwayBillDetailsComponent', () => {
  let component: EwayBillDetailsComponent;
  let fixture: ComponentFixture<EwayBillDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EwayBillDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EwayBillDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

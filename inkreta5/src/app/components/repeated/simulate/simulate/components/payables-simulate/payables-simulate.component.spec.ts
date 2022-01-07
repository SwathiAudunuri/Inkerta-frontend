import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayablesSimulateComponent } from './payables-simulate.component';

describe('PayablesSimulateComponent', () => {
  let component: PayablesSimulateComponent;
  let fixture: ComponentFixture<PayablesSimulateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayablesSimulateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayablesSimulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

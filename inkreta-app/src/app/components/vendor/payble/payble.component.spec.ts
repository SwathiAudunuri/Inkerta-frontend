import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaybleComponent } from './payble.component';

describe('PaybleComponent', () => {
  let component: PaybleComponent;
  let fixture: ComponentFixture<PaybleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaybleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaybleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

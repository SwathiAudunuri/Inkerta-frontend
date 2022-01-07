import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchShiptoComponent } from './dispatch-shipto.component';

describe('DispatchShiptoComponent', () => {
  let component: DispatchShiptoComponent;
  let fixture: ComponentFixture<DispatchShiptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatchShiptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchShiptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

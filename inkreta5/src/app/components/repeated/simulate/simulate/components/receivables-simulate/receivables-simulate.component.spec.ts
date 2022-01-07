import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivablesSimulateComponent } from './receivables-simulate.component';

describe('ReceivablesSimulateComponent', () => {
  let component: ReceivablesSimulateComponent;
  let fixture: ComponentFixture<ReceivablesSimulateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivablesSimulateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivablesSimulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

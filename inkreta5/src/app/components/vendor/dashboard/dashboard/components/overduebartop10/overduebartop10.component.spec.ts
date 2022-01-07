import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overduebartop10Component } from './overduebartop10.component';

describe('Overduebartop10Component', () => {
  let component: Overduebartop10Component;
  let fixture: ComponentFixture<Overduebartop10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Overduebartop10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Overduebartop10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

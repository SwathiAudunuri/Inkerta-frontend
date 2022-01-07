import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardpopupComponent } from './forwardpopup.component';

describe('ForwardpopupComponent', () => {
  let component: ForwardpopupComponent;
  let fixture: ComponentFixture<ForwardpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

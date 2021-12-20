import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendormappinggridComponent } from './vendormappinggrid.component';

describe('VendormappinggridComponent', () => {
  let component: VendormappinggridComponent;
  let fixture: ComponentFixture<VendormappinggridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendormappinggridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendormappinggridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendormappingeditComponent } from './vendormappingedit.component';

describe('VendormappingeditComponent', () => {
  let component: VendormappingeditComponent;
  let fixture: ComponentFixture<VendormappingeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendormappingeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendormappingeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

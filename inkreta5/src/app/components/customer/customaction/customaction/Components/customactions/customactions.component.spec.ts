import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomactionsComponent } from './customactions.component';

describe('CustomactionsComponent', () => {
  let component: CustomactionsComponent;
  let fixture: ComponentFixture<CustomactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

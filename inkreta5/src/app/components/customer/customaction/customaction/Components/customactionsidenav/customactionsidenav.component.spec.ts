import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomactionsidenavComponent } from './customactionsidenav.component';

describe('CustomactionsidenavComponent', () => {
  let component: CustomactionsidenavComponent;
  let fixture: ComponentFixture<CustomactionsidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomactionsidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomactionsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

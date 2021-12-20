import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOnbordingComponent } from './customer-onbording.component';

describe('CustomerOnbordingComponent', () => {
  let component: CustomerOnbordingComponent;
  let fixture: ComponentFixture<CustomerOnbordingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOnbordingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOnbordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

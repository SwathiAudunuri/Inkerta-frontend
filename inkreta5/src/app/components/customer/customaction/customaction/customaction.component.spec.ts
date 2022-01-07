import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomactionComponent } from './customaction.component';

describe('CustomactionComponent', () => {
  let component: CustomactionComponent;
  let fixture: ComponentFixture<CustomactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPatnerComponent } from './new-patner.component';

describe('NewPatnerComponent', () => {
  let component: NewPatnerComponent;
  let fixture: ComponentFixture<NewPatnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPatnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPatnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

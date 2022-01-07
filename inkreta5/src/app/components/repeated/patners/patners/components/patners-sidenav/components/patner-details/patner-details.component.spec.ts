import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatnerDetailsComponent } from './patner-details.component';

describe('PatnerDetailsComponent', () => {
  let component: PatnerDetailsComponent;
  let fixture: ComponentFixture<PatnerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatnerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatnerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

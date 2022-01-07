import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedtoMeComponent } from './assignedto-me.component';

describe('AssignedtoMeComponent', () => {
  let component: AssignedtoMeComponent;
  let fixture: ComponentFixture<AssignedtoMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedtoMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedtoMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

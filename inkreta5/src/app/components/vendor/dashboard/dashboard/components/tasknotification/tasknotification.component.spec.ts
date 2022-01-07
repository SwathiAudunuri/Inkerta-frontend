import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasknotificationComponent } from './tasknotification.component';

describe('TasknotificationComponent', () => {
  let component: TasknotificationComponent;
  let fixture: ComponentFixture<TasknotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasknotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasknotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskupdatestabComponent } from './taskupdatestab.component';

describe('TaskupdatestabComponent', () => {
  let component: TaskupdatestabComponent;
  let fixture: ComponentFixture<TaskupdatestabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskupdatestabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskupdatestabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

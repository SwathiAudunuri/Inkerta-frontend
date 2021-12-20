import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxTaskComponent } from './inbox-task.component';

describe('InboxTaskComponent', () => {
  let component: InboxTaskComponent;
  let fixture: ComponentFixture<InboxTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

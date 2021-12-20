import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxQueryComponent } from './inbox-query.component';

describe('InboxQueryComponent', () => {
  let component: InboxQueryComponent;
  let fixture: ComponentFixture<InboxQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

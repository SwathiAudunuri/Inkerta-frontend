import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10outstandingamountComponent } from './top10outstandingamount.component';

describe('Top10outstandingamountComponent', () => {
  let component: Top10outstandingamountComponent;
  let fixture: ComponentFixture<Top10outstandingamountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top10outstandingamountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10outstandingamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

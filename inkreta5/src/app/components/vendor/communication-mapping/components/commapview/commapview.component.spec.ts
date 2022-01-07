import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommapviewComponent } from './commapview.component';

describe('CommapviewComponent', () => {
  let component: CommapviewComponent;
  let fixture: ComponentFixture<CommapviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommapviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommapviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

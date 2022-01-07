import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommapviewautoComponent } from './commapviewauto.component';

describe('CommapviewautoComponent', () => {
  let component: CommapviewautoComponent;
  let fixture: ComponentFixture<CommapviewautoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommapviewautoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommapviewautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

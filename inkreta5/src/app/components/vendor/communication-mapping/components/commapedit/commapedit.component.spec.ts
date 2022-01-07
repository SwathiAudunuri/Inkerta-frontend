import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommapeditComponent } from './commapedit.component';

describe('CommapeditComponent', () => {
  let component: CommapeditComponent;
  let fixture: ComponentFixture<CommapeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommapeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommapeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

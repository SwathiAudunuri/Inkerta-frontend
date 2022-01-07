import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommapgridComponent } from './commapgrid.component';

describe('CommapgridComponent', () => {
  let component: CommapgridComponent;
  let fixture: ComponentFixture<CommapgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommapgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommapgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

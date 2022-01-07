import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecgridComponent } from './recgrid.component';

describe('RecgridComponent', () => {
  let component: RecgridComponent;
  let fixture: ComponentFixture<RecgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

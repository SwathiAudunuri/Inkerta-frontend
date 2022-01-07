import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommapviewdeliveryComponent } from './commapviewdelivery.component';

describe('CommapviewdeliveryComponent', () => {
  let component: CommapviewdeliveryComponent;
  let fixture: ComponentFixture<CommapviewdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommapviewdeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommapviewdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

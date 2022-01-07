import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommapdeliveryComponent } from './commapdelivery.component';

describe('CommapdeliveryComponent', () => {
  let component: CommapdeliveryComponent;
  let fixture: ComponentFixture<CommapdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommapdeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommapdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

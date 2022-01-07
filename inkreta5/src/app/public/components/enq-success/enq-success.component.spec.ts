import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqSuccessComponent } from './enq-success.component';

describe('EnqSuccessComponent', () => {
  let component: EnqSuccessComponent;
  let fixture: ComponentFixture<EnqSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnqSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnqSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

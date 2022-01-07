import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommapeditdeliveryComponent } from './commapeditdelivery.component';

describe('CommapeditdeliveryComponent', () => {
  let component: CommapeditdeliveryComponent;
  let fixture: ComponentFixture<CommapeditdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommapeditdeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommapeditdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

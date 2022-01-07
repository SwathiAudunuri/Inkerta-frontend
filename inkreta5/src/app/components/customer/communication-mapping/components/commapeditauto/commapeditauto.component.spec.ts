import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommapeditautoComponent } from './commapeditauto.component';

describe('CommapeditautoComponent', () => {
  let component: CommapeditautoComponent;
  let fixture: ComponentFixture<CommapeditautoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommapeditautoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommapeditautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

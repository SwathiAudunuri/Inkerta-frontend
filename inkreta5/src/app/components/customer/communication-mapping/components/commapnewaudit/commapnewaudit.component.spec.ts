import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommapnewauditComponent } from './commapnewaudit.component';

describe('CommapnewauditComponent', () => {
  let component: CommapnewauditComponent;
  let fixture: ComponentFixture<CommapnewauditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommapnewauditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommapnewauditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

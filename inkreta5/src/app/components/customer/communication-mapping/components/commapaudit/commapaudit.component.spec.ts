import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommapauditComponent } from './commapaudit.component';

describe('CommapauditComponent', () => {
  let component: CommapauditComponent;
  let fixture: ComponentFixture<CommapauditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommapauditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommapauditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

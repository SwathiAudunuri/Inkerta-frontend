import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecformComponent } from './recform.component';

describe('RecformComponent', () => {
  let component: RecformComponent;
  let fixture: ComponentFixture<RecformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

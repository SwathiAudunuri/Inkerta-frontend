import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedhorizontalbarComponent } from './stackedhorizontalbar.component';

describe('StackedhorizontalbarComponent', () => {
  let component: StackedhorizontalbarComponent;
  let fixture: ComponentFixture<StackedhorizontalbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedhorizontalbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedhorizontalbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

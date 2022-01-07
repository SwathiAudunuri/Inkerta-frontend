import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedinvsofcompanytableComponent } from './closedinvsofcompanytable.component';

describe('ClosedinvsofcompanytableComponent', () => {
  let component: ClosedinvsofcompanytableComponent;
  let fixture: ComponentFixture<ClosedinvsofcompanytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedinvsofcompanytableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedinvsofcompanytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

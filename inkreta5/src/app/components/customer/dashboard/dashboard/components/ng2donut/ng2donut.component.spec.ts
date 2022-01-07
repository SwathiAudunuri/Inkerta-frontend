import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2donutComponent } from './ng2donut.component';

describe('Ng2donutComponent', () => {
  let component: Ng2donutComponent;
  let fixture: ComponentFixture<Ng2donutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2donutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2donutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

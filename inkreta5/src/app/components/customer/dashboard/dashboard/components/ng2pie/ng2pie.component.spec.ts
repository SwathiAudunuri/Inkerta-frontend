import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2pieComponent } from './ng2pie.component';

describe('Ng2pieComponent', () => {
  let component: Ng2pieComponent;
  let fixture: ComponentFixture<Ng2pieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2pieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2pieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

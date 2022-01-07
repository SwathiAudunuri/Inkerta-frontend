import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2stackedbarComponent } from './ng2stackedbar.component';

describe('Ng2stackedbarComponent', () => {
  let component: Ng2stackedbarComponent;
  let fixture: ComponentFixture<Ng2stackedbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2stackedbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2stackedbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

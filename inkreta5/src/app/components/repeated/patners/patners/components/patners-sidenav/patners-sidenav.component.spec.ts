import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatnersSidenavComponent } from './patners-sidenav.component';

describe('PatnersSidenavComponent', () => {
  let component: PatnersSidenavComponent;
  let fixture: ComponentFixture<PatnersSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatnersSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatnersSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

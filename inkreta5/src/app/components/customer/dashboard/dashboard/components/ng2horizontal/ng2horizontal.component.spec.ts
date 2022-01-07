import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2horizontalComponent } from './ng2horizontal.component';

describe('Ng2horizontalComponent', () => {
  let component: Ng2horizontalComponent;
  let fixture: ComponentFixture<Ng2horizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2horizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2horizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

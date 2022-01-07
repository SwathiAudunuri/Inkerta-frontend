import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolestabComponent } from './rolestab.component';

describe('RolestabComponent', () => {
  let component: RolestabComponent;
  let fixture: ComponentFixture<RolestabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolestabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolestabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

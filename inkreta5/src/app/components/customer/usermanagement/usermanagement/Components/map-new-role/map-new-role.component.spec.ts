import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapNewRoleComponent } from './map-new-role.component';

describe('MapNewRoleComponent', () => {
  let component: MapNewRoleComponent;
  let fixture: ComponentFixture<MapNewRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapNewRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapNewRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

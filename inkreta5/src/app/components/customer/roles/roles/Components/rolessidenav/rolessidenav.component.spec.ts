import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolessidenavComponent } from './rolessidenav.component';

describe('RolessidenavComponent', () => {
  let component: RolessidenavComponent;
  let fixture: ComponentFixture<RolessidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolessidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolessidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiondetailsComponent } from './actiondetails.component';

describe('ActiondetailsComponent', () => {
  let component: ActiondetailsComponent;
  let fixture: ComponentFixture<ActiondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiondetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

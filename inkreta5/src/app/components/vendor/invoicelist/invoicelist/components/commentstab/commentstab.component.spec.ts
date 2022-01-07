import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentstabComponent } from './commentstab.component';

describe('CommentstabComponent', () => {
  let component: CommentstabComponent;
  let fixture: ComponentFixture<CommentstabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentstabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

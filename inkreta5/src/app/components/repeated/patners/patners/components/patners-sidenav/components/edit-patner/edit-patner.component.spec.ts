import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPatnerComponent } from './edit-patner.component';

describe('EditPatnerComponent', () => {
  let component: EditPatnerComponent;
  let fixture: ComponentFixture<EditPatnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPatnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPatnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

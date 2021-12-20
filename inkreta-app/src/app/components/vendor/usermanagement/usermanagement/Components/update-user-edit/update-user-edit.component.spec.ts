import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserEditComponent } from './update-user-edit.component';

describe('UpdateUserEditComponent', () => {
  let component: UpdateUserEditComponent;
  let fixture: ComponentFixture<UpdateUserEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

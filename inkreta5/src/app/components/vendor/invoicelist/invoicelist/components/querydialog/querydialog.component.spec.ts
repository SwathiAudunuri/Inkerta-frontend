import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerydialogComponent } from './querydialog.component';

describe('QuerydialogComponent', () => {
  let component: QuerydialogComponent;
  let fixture: ComponentFixture<QuerydialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuerydialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerydialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

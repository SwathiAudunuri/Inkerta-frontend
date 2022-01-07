import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerydocComponent } from './querydoc.component';

describe('QuerydocComponent', () => {
  let component: QuerydocComponent;
  let fixture: ComponentFixture<QuerydocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuerydocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerydocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

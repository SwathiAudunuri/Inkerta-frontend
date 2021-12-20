import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerySidenavComponent } from './query-sidenav.component';

describe('QuerySidenavComponent', () => {
  let component: QuerySidenavComponent;
  let fixture: ComponentFixture<QuerySidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuerySidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerySidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

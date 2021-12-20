import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerynotificationComponent } from './querynotification.component';

describe('QuerynotificationComponent', () => {
  let component: QuerynotificationComponent;
  let fixture: ComponentFixture<QuerynotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuerynotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerynotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

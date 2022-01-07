import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryfileuploadComponent } from './queryfileupload.component';

describe('QueryfileuploadComponent', () => {
  let component: QueryfileuploadComponent;
  let fixture: ComponentFixture<QueryfileuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryfileuploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryfileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

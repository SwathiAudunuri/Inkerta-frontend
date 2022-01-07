import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostIntoErpComponent } from './post-into-erp.component';

describe('PostIntoErpComponent', () => {
  let component: PostIntoErpComponent;
  let fixture: ComponentFixture<PostIntoErpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostIntoErpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostIntoErpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

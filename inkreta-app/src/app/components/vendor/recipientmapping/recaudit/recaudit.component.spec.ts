import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecauditComponent } from './recaudit.component';

describe('RecauditComponent', () => {
  let component: RecauditComponent;
  let fixture: ComponentFixture<RecauditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecauditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecauditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

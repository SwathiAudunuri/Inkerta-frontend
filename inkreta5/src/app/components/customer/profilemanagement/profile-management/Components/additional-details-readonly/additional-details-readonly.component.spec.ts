import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalDetailsReadonlyComponent } from './additional-details-readonly.component';

describe('AdditionalDetailsReadonlyComponent', () => {
  let component: AdditionalDetailsReadonlyComponent;
  let fixture: ComponentFixture<AdditionalDetailsReadonlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalDetailsReadonlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalDetailsReadonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

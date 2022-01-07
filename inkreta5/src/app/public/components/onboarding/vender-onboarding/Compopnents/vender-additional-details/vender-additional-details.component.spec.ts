import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderAdditionalDetailsComponent } from './vender-additional-details.component';

describe('VenderAdditionalDetailsComponent', () => {
  let component: VenderAdditionalDetailsComponent;
  let fixture: ComponentFixture<VenderAdditionalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderAdditionalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderAdditionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

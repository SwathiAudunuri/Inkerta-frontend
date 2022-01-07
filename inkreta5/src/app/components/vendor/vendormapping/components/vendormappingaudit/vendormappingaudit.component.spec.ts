import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendormappingauditComponent } from './vendormappingaudit.component';

describe('VendormappingauditComponent', () => {
  let component: VendormappingauditComponent;
  let fixture: ComponentFixture<VendormappingauditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendormappingauditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendormappingauditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

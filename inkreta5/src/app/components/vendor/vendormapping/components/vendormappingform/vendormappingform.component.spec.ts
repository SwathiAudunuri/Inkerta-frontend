import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendormappingformComponent } from './vendormappingform.component';

describe('VendormappingformComponent', () => {
  let component: VendormappingformComponent;
  let fixture: ComponentFixture<VendormappingformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendormappingformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendormappingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

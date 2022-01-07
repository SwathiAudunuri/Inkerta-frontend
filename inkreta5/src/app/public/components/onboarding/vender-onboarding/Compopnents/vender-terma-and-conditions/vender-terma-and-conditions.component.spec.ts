import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderTermaAndConditionsComponent } from './vender-terma-and-conditions.component';

describe('VenderTermaAndConditionsComponent', () => {
  let component: VenderTermaAndConditionsComponent;
  let fixture: ComponentFixture<VenderTermaAndConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderTermaAndConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderTermaAndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

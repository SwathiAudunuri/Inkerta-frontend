import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderActivationComponent } from './vender-activation.component';

describe('VenderActivationComponent', () => {
  let component: VenderActivationComponent;
  let fixture: ComponentFixture<VenderActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderActivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

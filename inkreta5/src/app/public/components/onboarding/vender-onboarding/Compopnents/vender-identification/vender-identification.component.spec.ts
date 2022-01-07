import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderIdentificationComponent } from './vender-identification.component';

describe('VenderIdentificationComponent', () => {
  let component: VenderIdentificationComponent;
  let fixture: ComponentFixture<VenderIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderIdentificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

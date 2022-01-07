import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderContactInfoComponent } from './vender-contact-info.component';

describe('VenderContactInfoComponent', () => {
  let component: VenderContactInfoComponent;
  let fixture: ComponentFixture<VenderContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderContactInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

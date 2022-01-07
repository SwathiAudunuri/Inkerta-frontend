import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalUpdateStatusComponent } from './external-update-status.component';

describe('ExternalUpdateStatusComponent', () => {
  let component: ExternalUpdateStatusComponent;
  let fixture: ComponentFixture<ExternalUpdateStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalUpdateStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalUpdateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

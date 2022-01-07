import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderMobileDialogComponent } from './vender-mobile-dialog.component';

describe('VenderMobileDialogComponent', () => {
  let component: VenderMobileDialogComponent;
  let fixture: ComponentFixture<VenderMobileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderMobileDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderMobileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

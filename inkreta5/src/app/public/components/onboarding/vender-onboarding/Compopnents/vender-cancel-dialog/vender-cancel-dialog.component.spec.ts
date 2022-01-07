import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderCancelDialogComponent } from './vender-cancel-dialog.component';

describe('VenderCancelDialogComponent', () => {
  let component: VenderCancelDialogComponent;
  let fixture: ComponentFixture<VenderCancelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderCancelDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderCancelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

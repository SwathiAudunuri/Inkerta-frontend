import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifydocumentsComponent } from './verifydocuments.component';

describe('VerifydocumentsComponent', () => {
  let component: VerifydocumentsComponent;
  let fixture: ComponentFixture<VerifydocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifydocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifydocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

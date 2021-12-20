import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudittodoComponent } from './audittodo.component';

describe('AudittodoComponent', () => {
  let component: AudittodoComponent;
  let fixture: ComponentFixture<AudittodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudittodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudittodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

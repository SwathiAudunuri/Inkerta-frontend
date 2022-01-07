import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisedinvoicesComponent } from './revisedinvoices.component';

describe('RevisedinvoicesComponent', () => {
  let component: RevisedinvoicesComponent;
  let fixture: ComponentFixture<RevisedinvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisedinvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisedinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

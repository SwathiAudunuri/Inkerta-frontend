import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidinvoicesComponent } from './paidinvoices.component';

describe('PaidinvoicesComponent', () => {
  let component: PaidinvoicesComponent;
  let fixture: ComponentFixture<PaidinvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidinvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

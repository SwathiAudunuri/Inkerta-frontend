import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpaidinvoicesComponent } from './unpaidinvoices.component';

describe('UnpaidinvoicesComponent', () => {
  let component: UnpaidinvoicesComponent;
  let fixture: ComponentFixture<UnpaidinvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnpaidinvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpaidinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

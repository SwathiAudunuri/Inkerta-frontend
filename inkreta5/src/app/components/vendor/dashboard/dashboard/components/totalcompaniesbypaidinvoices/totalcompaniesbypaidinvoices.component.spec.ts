import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcompaniesbypaidinvoicesComponent } from './totalcompaniesbypaidinvoices.component';

describe('TotalcompaniesbypaidinvoicesComponent', () => {
  let component: TotalcompaniesbypaidinvoicesComponent;
  let fixture: ComponentFixture<TotalcompaniesbypaidinvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalcompaniesbypaidinvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalcompaniesbypaidinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanydetailstableComponent } from './companydetailstable.component';

describe('CompanydetailstableComponent', () => {
  let component: CompanydetailstableComponent;
  let fixture: ComponentFixture<CompanydetailstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanydetailstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanydetailstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

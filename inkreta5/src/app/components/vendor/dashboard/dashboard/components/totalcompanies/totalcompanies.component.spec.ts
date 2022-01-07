import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcompaniesComponent } from './totalcompanies.component';

describe('TotalcompaniesComponent', () => {
  let component: TotalcompaniesComponent;
  let fixture: ComponentFixture<TotalcompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalcompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalcompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

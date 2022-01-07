import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2areaComponent } from './ng2area.component';

describe('Ng2areaComponent', () => {
  let component: Ng2areaComponent;
  let fixture: ComponentFixture<Ng2areaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2areaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2areaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

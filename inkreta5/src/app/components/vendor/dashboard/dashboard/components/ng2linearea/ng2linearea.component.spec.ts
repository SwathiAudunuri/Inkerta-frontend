import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2lineareaComponent } from './ng2linearea.component';

describe('Ng2lineareaComponent', () => {
  let component: Ng2lineareaComponent;
  let fixture: ComponentFixture<Ng2lineareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2lineareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2lineareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

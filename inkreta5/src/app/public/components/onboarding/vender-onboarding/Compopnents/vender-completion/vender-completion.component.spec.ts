import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderCompletionComponent } from './vender-completion.component';

describe('VenderCompletionComponent', () => {
  let component: VenderCompletionComponent;
  let fixture: ComponentFixture<VenderCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderCompletionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

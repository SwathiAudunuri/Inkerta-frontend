import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecupdateformComponent } from './recupdateform.component';

describe('RecupdateformComponent', () => {
  let component: RecupdateformComponent;
  let fixture: ComponentFixture<RecupdateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecupdateformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecupdateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

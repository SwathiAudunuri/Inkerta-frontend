import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecviewformComponent } from './recviewform.component';

describe('RecviewformComponent', () => {
  let component: RecviewformComponent;
  let fixture: ComponentFixture<RecviewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecviewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecviewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

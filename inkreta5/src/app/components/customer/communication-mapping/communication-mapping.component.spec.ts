import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationMappingComponent } from './communication-mapping.component';

describe('CommunicationMappingComponent', () => {
  let component: CommunicationMappingComponent;
  let fixture: ComponentFixture<CommunicationMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

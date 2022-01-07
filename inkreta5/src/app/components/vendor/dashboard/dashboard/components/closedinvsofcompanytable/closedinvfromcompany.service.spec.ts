import { TestBed } from '@angular/core/testing';

import { ClosedinvfromcompanyService } from './closedinvfromcompany.service';

describe('ClosedinvfromcompanyService', () => {
  let service: ClosedinvfromcompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClosedinvfromcompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

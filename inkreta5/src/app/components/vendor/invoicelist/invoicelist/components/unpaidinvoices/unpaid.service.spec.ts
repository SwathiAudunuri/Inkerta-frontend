import { TestBed } from '@angular/core/testing';

import { UnpaidService } from './unpaid.service';

describe('UnpaidService', () => {
  let service: UnpaidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnpaidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CustomrolesService } from './customroles.service';

describe('CustomrolesService', () => {
  let service: CustomrolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomrolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

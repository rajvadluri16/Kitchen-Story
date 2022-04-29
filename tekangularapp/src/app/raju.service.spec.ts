import { TestBed } from '@angular/core/testing';

import { RajuService } from './raju.service';

describe('RajuService', () => {
  let service: RajuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RajuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

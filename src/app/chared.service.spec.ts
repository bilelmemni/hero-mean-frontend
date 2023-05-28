import { TestBed } from '@angular/core/testing';

import { CharedService } from './chared.service';

describe('CharedService', () => {
  let service: CharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

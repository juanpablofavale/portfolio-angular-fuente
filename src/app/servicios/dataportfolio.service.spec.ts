import { TestBed } from '@angular/core/testing';

import { DataportfolioService } from './dataportfolio.service';

describe('DataportfolioService', () => {
  let service: DataportfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataportfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

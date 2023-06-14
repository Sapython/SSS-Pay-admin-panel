import { TestBed } from '@angular/core/testing';

import { MasterDistributorGuard } from './master-distributor.guard';

describe('MasterDistributorGuard', () => {
  let guard: MasterDistributorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MasterDistributorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

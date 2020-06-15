import { TestBed } from '@angular/core/testing';

import { OverdraftService } from './overdraft.service';

describe('OverdraftService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OverdraftService = TestBed.get(OverdraftService);
    expect(service).toBeTruthy();
  });
});

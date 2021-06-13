import { TestBed } from '@angular/core/testing';

import { BankResponseService } from './bank-response.service';

describe('BankResponseService', () => {
  let service: BankResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

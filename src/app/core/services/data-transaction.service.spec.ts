import { TestBed, inject } from '@angular/core/testing';

import { DataTransactionService } from './data-transaction.service';

describe('DataTransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataTransactionService]
    });
  });

  it('should be created', inject([DataTransactionService], (service: DataTransactionService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { JetonService } from './jeton.service';

describe('JetonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JetonService]
    });
  });

  it('should be created', inject([JetonService], (service: JetonService) => {
    expect(service).toBeTruthy();
  }));
});

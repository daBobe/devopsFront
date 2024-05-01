import { TestBed } from '@angular/core/testing';

import { EncherService } from './encher.service';

describe('EncherService', () => {
  let service: EncherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

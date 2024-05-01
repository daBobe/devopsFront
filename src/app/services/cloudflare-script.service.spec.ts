import { TestBed } from '@angular/core/testing';

import { CloudflareScriptService } from './cloudflare-script.service';

describe('CloudflareScriptService', () => {
  let service: CloudflareScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudflareScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

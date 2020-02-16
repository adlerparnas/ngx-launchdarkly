import { TestBed } from '@angular/core/testing';

import { NgxLaunchdarklyService } from './ngx-launchdarkly.service';

describe('NgxLaunchdarklyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLaunchdarklyService = TestBed.get(NgxLaunchdarklyService);
    expect(service).toBeTruthy();
  });
});

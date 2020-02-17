import { TestBed } from '@angular/core/testing';

import { LaunchDarklyService } from './ngx-launchdarkly.service';

describe('LaunchDarklyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaunchDarklyService = TestBed.get(LaunchDarklyService);
    expect(service).toBeTruthy();
  });
});

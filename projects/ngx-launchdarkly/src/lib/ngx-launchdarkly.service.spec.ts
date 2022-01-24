import { TestBed } from '@angular/core/testing';

import {
  LaunchDarklyService,
  LAUNCH_DARKLY_API_KEY,
  LAUNCH_DARKLY_INITIALIZER
} from './ngx-launchdarkly.service';
import {skip} from 'rxjs/operators';

describe('LaunchDarklyService', () => {
  const mockedLDClient = {
    on: jasmine.createSpy('on').and.callFake((event: string, fn: Function) => {
      mockedLDClient.events[event] = fn;
    }),
    identify: jasmine.createSpy('identify'),

    allFlags: () => ({foo: true}),
    getUser: () => 'anon',

    // those properties are for the test only
    events: {},
    trigger: (event, value) => mockedLDClient.events[event](value)
  };

  const mockedLDFactory = jasmine.createSpy('ldFactory').and.returnValue(mockedLDClient);

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: LAUNCH_DARKLY_INITIALIZER, useValue: mockedLDFactory },
      { provide: LAUNCH_DARKLY_API_KEY, useValue: 'foo' }
    ]
  }));

  it('should be created', () => {
    const service: LaunchDarklyService = TestBed.get(LaunchDarklyService);
    expect(service).toBeTruthy();
  });

  it('should initialize the LDClient with the api key and anonymous user', () => {
    TestBed.get(LaunchDarklyService);
    expect(mockedLDFactory).toHaveBeenCalledWith('foo', { anonymous: true, key: 'anon', }, null);
  });

  it('should add listners for events', () => {
    TestBed.get(LaunchDarklyService);
    expect(mockedLDClient.on).toHaveBeenCalledWith('initialized', jasmine.any(Function));
    expect(mockedLDClient.on).toHaveBeenCalledWith('change', jasmine.any(Function));
    expect(mockedLDClient.on).toHaveBeenCalledWith('error', jasmine.any(Function));
  });

  it('should push updates to the subject when the ldClient is initialized', (done) => {
    const service: LaunchDarklyService = TestBed.get(LaunchDarklyService);

    const subscription = service.flagChange
      // Skip the initial missing values.
      .pipe(skip(1))
      .subscribe((value) => {
        expect(value).toEqual({foo: true});
        subscription.unsubscribe();
        done();
      }, done);

    mockedLDClient.trigger('initialized', {foo: true});
  });

  it('should updated the user on the LDClient', () => {
    const service: LaunchDarklyService = TestBed.get(LaunchDarklyService);
    service.changeUser('bar');

    expect(mockedLDClient.identify).toHaveBeenCalledWith({ name: 'bar', key: 'bar', anonymous: false });
  });
});

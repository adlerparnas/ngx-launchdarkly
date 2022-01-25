import { Injectable, Inject, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LDClient, LDFlagSet, LDOptions } from 'launchdarkly-js-client-sdk';
import { LDFlagChangeset } from 'launchdarkly-js-sdk-common';

export const LAUNCH_DARKLY_INITIALIZER = 'LAUNCH_DARKLY_INITIALIZER';
export const LAUNCH_DARKLY_API_KEY = 'LAUNCH_DARKLY_API_KEY';
export const LAUNCH_DARKLY_OPTIONS = 'LAUNCH_DARKLY_OPTIONS';

@Injectable({
  providedIn: 'root'
})
export class LaunchDarklyService {
  private _ldClient: LDClient;
  private _flags: LDFlagSet;

  readonly flagChange = new BehaviorSubject<LDFlagSet>({});

  private _setFlags(flags: LDFlagChangeset) {
    this._flags = {...this._flags, ...flags};
    this.flagChange.next(this._flags);
  }

  constructor(
    @Inject(LAUNCH_DARKLY_INITIALIZER) ldInitializer: Function,
    @Inject(LAUNCH_DARKLY_API_KEY) ldClientApiKey: string,
    @Optional() @Inject(LAUNCH_DARKLY_OPTIONS) ldOptions: LDOptions | undefined
  ) {
    this._flags = {};
    this._ldClient = ldInitializer(ldClientApiKey, {
      key: 'anon',
      anonymous: true
    }, ldOptions);

    this._ldClient.on('initialized', () => this._setFlags(this._ldClient.allFlags()));

    this._ldClient.on('change', (value: LDFlagChangeset) => {
      // We are only interested in having the values of the flags in their
      // current state. Iterate over the values we receive from the update,
      // and set it to the the current value. This gives us an update that
      // can be passed into _setFlags.
      this._setFlags(Object.keys(value || {})
        .map((key) => ({key, value: value[key].current}))
        .reduce((o, v) => ({...o, [v.key]: v.value}), {}));
    });

    this._ldClient.on('error', (error) => this.flagChange.error(error));
  }

  changeUser(user: string) {
    const currentUser = this._ldClient.getUser();

    if (currentUser && currentUser.key !== user) {
      if (user !== 'Anonymous') {
        this._ldClient.identify({ key: user, name: user, anonymous: false });
      } else {
        this._ldClient.identify({ key: 'anon', anonymous: true });
      }
    }
  }
}

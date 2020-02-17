import { Injectable, Inject, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import { LDClient, LDFlagSet, LDOptions } from 'launchdarkly-js-client-sdk';

export const LAUNCH_DARKLY_INITIALIZER = 'LAUNCH_DARKLY_INITIALIZER';
export const LAUNCH_DARKLY_API_KEY = 'LAUNCH_DARKLY_API_KEY';
export const LAUNCH_DARKLY_OPTIONS = 'LAUNCH_DARKLY_OPTIONS';

@Injectable({
  providedIn: 'root'
})
export class LaunchDarklyService {
  private _ldClient: LDClient;
  private _flags: LDFlagSet;

  readonly flagChange: Subject<any> = new Subject<any>();

  private _setFlags(flags: any) {
    this._flags = flags;
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

    this._ldClient.on('initialized', (value) => this._setFlags(value));

    this._ldClient.on('change', (value) => this._setFlags(value));

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

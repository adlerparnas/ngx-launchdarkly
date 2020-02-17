import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { LDClient, LDFlagSet, initialize } from 'launchdarkly-js-client-sdk';

export const LAUNCH_DARKLY_API_KEY = 'LAUNCH_DARKLY_API_KEY';

@Injectable({
  providedIn: 'root'
})
export class LaunchDarklyService {
  private _ldClient: LDClient;
  private _flags: LDFlagSet;

  flagChange: Subject<Object> = new Subject<Object>();

  private _setFlags(flags: LDFlagSet) {
    console.log(LaunchDarklyService.name, 'flags changed', flags);
    this._flags = flags;
    this.flagChange.next(this._flags);
  }

  constructor(@Inject(LAUNCH_DARKLY_API_KEY) launchDarklyClientApiKey: string) {
    this._flags = {};
    this._ldClient = initialize(launchDarklyClientApiKey, {
      key: 'anon',
      anonymous: true
    });

    this._ldClient.on('change', this._setFlags);

    this._ldClient.on('initialized', this._setFlags);

    this._ldClient.on('error', (error) => this.flagChange.error(error));
  }

  changeUser(userKey: string) {
    this._ldClient.identify({
      key: userKey,
      name: userKey,
      anonymous: true
    });
  }
}

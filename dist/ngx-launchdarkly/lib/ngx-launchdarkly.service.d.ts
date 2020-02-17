import { Subject } from 'rxjs';
import { LDOptions } from 'launchdarkly-js-client-sdk';
export declare const LAUNCH_DARKLY_INITIALIZER = "LAUNCH_DARKLY_INITIALIZER";
export declare const LAUNCH_DARKLY_API_KEY = "LAUNCH_DARKLY_API_KEY";
export declare const LAUNCH_DARKLY_OPTIONS = "LAUNCH_DARKLY_OPTIONS";
export declare class LaunchDarklyService {
    private _ldClient;
    private _flags;
    readonly flagChange: Subject<any>;
    private _setFlags;
    constructor(ldInitializer: Function, ldClientApiKey: string, ldOptions: LDOptions | undefined);
    changeUser(user: string): void;
}

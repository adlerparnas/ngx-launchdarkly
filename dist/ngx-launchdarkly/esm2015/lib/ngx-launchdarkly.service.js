/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-launchdarkly.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/** @type {?} */
export const LAUNCH_DARKLY_INITIALIZER = 'LAUNCH_DARKLY_INITIALIZER';
/** @type {?} */
export const LAUNCH_DARKLY_API_KEY = 'LAUNCH_DARKLY_API_KEY';
/** @type {?} */
export const LAUNCH_DARKLY_OPTIONS = 'LAUNCH_DARKLY_OPTIONS';
export class LaunchDarklyService {
    /**
     * @param {?} ldInitializer
     * @param {?} ldClientApiKey
     * @param {?} ldOptions
     */
    constructor(ldInitializer, ldClientApiKey, ldOptions) {
        this.flagChange = new Subject();
        this._flags = {};
        this._ldClient = ldInitializer(ldClientApiKey, {
            key: 'anon',
            anonymous: true
        }, ldOptions);
        this._ldClient.on('initialized', (/**
         * @param {?} value
         * @return {?}
         */
        (value) => this._setFlags(value)));
        this._ldClient.on('change', (/**
         * @param {?} value
         * @return {?}
         */
        (value) => this._setFlags(value)));
        this._ldClient.on('error', (/**
         * @param {?} error
         * @return {?}
         */
        (error) => this.flagChange.error(error)));
    }
    /**
     * @private
     * @param {?} flags
     * @return {?}
     */
    _setFlags(flags) {
        this._flags = flags;
        this.flagChange.next(this._flags);
    }
    /**
     * @param {?} user
     * @return {?}
     */
    changeUser(user) {
        /** @type {?} */
        const currentUser = this._ldClient.getUser();
        if (currentUser && currentUser.key !== user) {
            if (user !== 'Anonymous') {
                this._ldClient.identify({ key: user, name: user, anonymous: false });
            }
            else {
                this._ldClient.identify({ key: 'anon', anonymous: true });
            }
        }
    }
}
LaunchDarklyService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LaunchDarklyService.ctorParameters = () => [
    { type: Function, decorators: [{ type: Inject, args: [LAUNCH_DARKLY_INITIALIZER,] }] },
    { type: String, decorators: [{ type: Inject, args: [LAUNCH_DARKLY_API_KEY,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LAUNCH_DARKLY_OPTIONS,] }] }
];
/** @nocollapse */ LaunchDarklyService.ngInjectableDef = i0.defineInjectable({ factory: function LaunchDarklyService_Factory() { return new LaunchDarklyService(i0.inject("LAUNCH_DARKLY_INITIALIZER"), i0.inject("LAUNCH_DARKLY_API_KEY"), i0.inject("LAUNCH_DARKLY_OPTIONS", 8)); }, token: LaunchDarklyService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    LaunchDarklyService.prototype._ldClient;
    /**
     * @type {?}
     * @private
     */
    LaunchDarklyService.prototype._flags;
    /** @type {?} */
    LaunchDarklyService.prototype.flagChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxhdW5jaGRhcmtseS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxhdW5jaGRhcmtseS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbGF1bmNoZGFya2x5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBRy9CLE1BQU0sT0FBTyx5QkFBeUIsR0FBRywyQkFBMkI7O0FBQ3BFLE1BQU0sT0FBTyxxQkFBcUIsR0FBRyx1QkFBdUI7O0FBQzVELE1BQU0sT0FBTyxxQkFBcUIsR0FBRyx1QkFBdUI7QUFLNUQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBVzlCLFlBQ3FDLGFBQXVCLEVBQzNCLGNBQXNCLEVBQ1YsU0FBZ0M7UUFWcEUsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBWXJELElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLGNBQWMsRUFBRTtZQUM3QyxHQUFHLEVBQUUsTUFBTTtZQUNYLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFZCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxhQUFhOzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUVuRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPOzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7O0lBckJPLFNBQVMsQ0FBQyxLQUFVO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQW9CRCxVQUFVLENBQUMsSUFBWTs7Y0FDZixXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7UUFFNUMsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDM0MsSUFBSSxJQUFJLEtBQUssV0FBVyxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUN0RTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDM0Q7U0FDRjtJQUNILENBQUM7OztZQTFDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFhcUQsUUFBUSx1QkFBekQsTUFBTSxTQUFDLHlCQUF5Qjt5Q0FDaEMsTUFBTSxTQUFDLHFCQUFxQjs0Q0FDNUIsUUFBUSxZQUFJLE1BQU0sU0FBQyxxQkFBcUI7Ozs7Ozs7O0lBYjNDLHdDQUE0Qjs7Ozs7SUFDNUIscUNBQTBCOztJQUUxQix5Q0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMRENsaWVudCwgTERGbGFnU2V0LCBMRE9wdGlvbnMgfSBmcm9tICdsYXVuY2hkYXJrbHktanMtY2xpZW50LXNkayc7XG5cbmV4cG9ydCBjb25zdCBMQVVOQ0hfREFSS0xZX0lOSVRJQUxJWkVSID0gJ0xBVU5DSF9EQVJLTFlfSU5JVElBTElaRVInO1xuZXhwb3J0IGNvbnN0IExBVU5DSF9EQVJLTFlfQVBJX0tFWSA9ICdMQVVOQ0hfREFSS0xZX0FQSV9LRVknO1xuZXhwb3J0IGNvbnN0IExBVU5DSF9EQVJLTFlfT1BUSU9OUyA9ICdMQVVOQ0hfREFSS0xZX09QVElPTlMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMYXVuY2hEYXJrbHlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfbGRDbGllbnQ6IExEQ2xpZW50O1xuICBwcml2YXRlIF9mbGFnczogTERGbGFnU2V0O1xuXG4gIHJlYWRvbmx5IGZsYWdDaGFuZ2U6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBwcml2YXRlIF9zZXRGbGFncyhmbGFnczogYW55KSB7XG4gICAgdGhpcy5fZmxhZ3MgPSBmbGFncztcbiAgICB0aGlzLmZsYWdDaGFuZ2UubmV4dCh0aGlzLl9mbGFncyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KExBVU5DSF9EQVJLTFlfSU5JVElBTElaRVIpIGxkSW5pdGlhbGl6ZXI6IEZ1bmN0aW9uLFxuICAgIEBJbmplY3QoTEFVTkNIX0RBUktMWV9BUElfS0VZKSBsZENsaWVudEFwaUtleTogc3RyaW5nLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTEFVTkNIX0RBUktMWV9PUFRJT05TKSBsZE9wdGlvbnM6IExET3B0aW9ucyB8IHVuZGVmaW5lZFxuICApIHtcbiAgICB0aGlzLl9mbGFncyA9IHt9O1xuICAgIHRoaXMuX2xkQ2xpZW50ID0gbGRJbml0aWFsaXplcihsZENsaWVudEFwaUtleSwge1xuICAgICAga2V5OiAnYW5vbicsXG4gICAgICBhbm9ueW1vdXM6IHRydWVcbiAgICB9LCBsZE9wdGlvbnMpO1xuXG4gICAgdGhpcy5fbGRDbGllbnQub24oJ2luaXRpYWxpemVkJywgKHZhbHVlKSA9PiB0aGlzLl9zZXRGbGFncyh2YWx1ZSkpO1xuXG4gICAgdGhpcy5fbGRDbGllbnQub24oJ2NoYW5nZScsICh2YWx1ZSkgPT4gdGhpcy5fc2V0RmxhZ3ModmFsdWUpKTtcblxuICAgIHRoaXMuX2xkQ2xpZW50Lm9uKCdlcnJvcicsIChlcnJvcikgPT4gdGhpcy5mbGFnQ2hhbmdlLmVycm9yKGVycm9yKSk7XG4gIH1cblxuICBjaGFuZ2VVc2VyKHVzZXI6IHN0cmluZykge1xuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdGhpcy5fbGRDbGllbnQuZ2V0VXNlcigpO1xuXG4gICAgaWYgKGN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyLmtleSAhPT0gdXNlcikge1xuICAgICAgaWYgKHVzZXIgIT09ICdBbm9ueW1vdXMnKSB7XG4gICAgICAgIHRoaXMuX2xkQ2xpZW50LmlkZW50aWZ5KHsga2V5OiB1c2VyLCBuYW1lOiB1c2VyLCBhbm9ueW1vdXM6IGZhbHNlIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbGRDbGllbnQuaWRlbnRpZnkoeyBrZXk6ICdhbm9uJywgYW5vbnltb3VzOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19
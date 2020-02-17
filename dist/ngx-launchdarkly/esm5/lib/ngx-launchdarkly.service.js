/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-launchdarkly.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/** @type {?} */
export var LAUNCH_DARKLY_INITIALIZER = 'LAUNCH_DARKLY_INITIALIZER';
/** @type {?} */
export var LAUNCH_DARKLY_API_KEY = 'LAUNCH_DARKLY_API_KEY';
/** @type {?} */
export var LAUNCH_DARKLY_OPTIONS = 'LAUNCH_DARKLY_OPTIONS';
var LaunchDarklyService = /** @class */ (function () {
    function LaunchDarklyService(ldInitializer, ldClientApiKey, ldOptions) {
        var _this = this;
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
        function (value) { return _this._setFlags(value); }));
        this._ldClient.on('change', (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this._setFlags(value); }));
        this._ldClient.on('error', (/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return _this.flagChange.error(error); }));
    }
    /**
     * @private
     * @param {?} flags
     * @return {?}
     */
    LaunchDarklyService.prototype._setFlags = /**
     * @private
     * @param {?} flags
     * @return {?}
     */
    function (flags) {
        this._flags = flags;
        this.flagChange.next(this._flags);
    };
    /**
     * @param {?} user
     * @return {?}
     */
    LaunchDarklyService.prototype.changeUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        /** @type {?} */
        var currentUser = this._ldClient.getUser();
        if (currentUser && currentUser.key !== user) {
            if (user !== 'Anonymous') {
                this._ldClient.identify({ key: user, name: user, anonymous: false });
            }
            else {
                this._ldClient.identify({ key: 'anon', anonymous: true });
            }
        }
    };
    LaunchDarklyService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LaunchDarklyService.ctorParameters = function () { return [
        { type: Function, decorators: [{ type: Inject, args: [LAUNCH_DARKLY_INITIALIZER,] }] },
        { type: String, decorators: [{ type: Inject, args: [LAUNCH_DARKLY_API_KEY,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LAUNCH_DARKLY_OPTIONS,] }] }
    ]; };
    /** @nocollapse */ LaunchDarklyService.ngInjectableDef = i0.defineInjectable({ factory: function LaunchDarklyService_Factory() { return new LaunchDarklyService(i0.inject("LAUNCH_DARKLY_INITIALIZER"), i0.inject("LAUNCH_DARKLY_API_KEY"), i0.inject("LAUNCH_DARKLY_OPTIONS", 8)); }, token: LaunchDarklyService, providedIn: "root" });
    return LaunchDarklyService;
}());
export { LaunchDarklyService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxhdW5jaGRhcmtseS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxhdW5jaGRhcmtseS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbGF1bmNoZGFya2x5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBRy9CLE1BQU0sS0FBTyx5QkFBeUIsR0FBRywyQkFBMkI7O0FBQ3BFLE1BQU0sS0FBTyxxQkFBcUIsR0FBRyx1QkFBdUI7O0FBQzVELE1BQU0sS0FBTyxxQkFBcUIsR0FBRyx1QkFBdUI7QUFFNUQ7SUFjRSw2QkFDcUMsYUFBdUIsRUFDM0IsY0FBc0IsRUFDVixTQUFnQztRQUg3RSxpQkFnQkM7UUF2QlEsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBWXJELElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLGNBQWMsRUFBRTtZQUM3QyxHQUFHLEVBQUUsTUFBTTtZQUNYLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFZCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxhQUFhOzs7O1FBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFyQixDQUFxQixFQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUTs7OztRQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBckIsQ0FBcUIsRUFBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU87Ozs7UUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUE1QixDQUE0QixFQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7O0lBckJPLHVDQUFTOzs7OztJQUFqQixVQUFrQixLQUFVO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQW9CRCx3Q0FBVTs7OztJQUFWLFVBQVcsSUFBWTs7WUFDZixXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7UUFFNUMsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDM0MsSUFBSSxJQUFJLEtBQUssV0FBVyxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUN0RTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDM0Q7U0FDRjtJQUNILENBQUM7O2dCQTFDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWFxRCxRQUFRLHVCQUF6RCxNQUFNLFNBQUMseUJBQXlCOzZDQUNoQyxNQUFNLFNBQUMscUJBQXFCO2dEQUM1QixRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjs7OzhCQXpCN0M7Q0FtREMsQUEzQ0QsSUEyQ0M7U0F4Q1ksbUJBQW1COzs7Ozs7SUFDOUIsd0NBQTRCOzs7OztJQUM1QixxQ0FBMEI7O0lBRTFCLHlDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExEQ2xpZW50LCBMREZsYWdTZXQsIExET3B0aW9ucyB9IGZyb20gJ2xhdW5jaGRhcmtseS1qcy1jbGllbnQtc2RrJztcblxuZXhwb3J0IGNvbnN0IExBVU5DSF9EQVJLTFlfSU5JVElBTElaRVIgPSAnTEFVTkNIX0RBUktMWV9JTklUSUFMSVpFUic7XG5leHBvcnQgY29uc3QgTEFVTkNIX0RBUktMWV9BUElfS0VZID0gJ0xBVU5DSF9EQVJLTFlfQVBJX0tFWSc7XG5leHBvcnQgY29uc3QgTEFVTkNIX0RBUktMWV9PUFRJT05TID0gJ0xBVU5DSF9EQVJLTFlfT1BUSU9OUyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExhdW5jaERhcmtseVNlcnZpY2Uge1xuICBwcml2YXRlIF9sZENsaWVudDogTERDbGllbnQ7XG4gIHByaXZhdGUgX2ZsYWdzOiBMREZsYWdTZXQ7XG5cbiAgcmVhZG9ubHkgZmxhZ0NoYW5nZTogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIHByaXZhdGUgX3NldEZsYWdzKGZsYWdzOiBhbnkpIHtcbiAgICB0aGlzLl9mbGFncyA9IGZsYWdzO1xuICAgIHRoaXMuZmxhZ0NoYW5nZS5uZXh0KHRoaXMuX2ZsYWdzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoTEFVTkNIX0RBUktMWV9JTklUSUFMSVpFUikgbGRJbml0aWFsaXplcjogRnVuY3Rpb24sXG4gICAgQEluamVjdChMQVVOQ0hfREFSS0xZX0FQSV9LRVkpIGxkQ2xpZW50QXBpS2V5OiBzdHJpbmcsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMQVVOQ0hfREFSS0xZX09QVElPTlMpIGxkT3B0aW9uczogTERPcHRpb25zIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuX2ZsYWdzID0ge307XG4gICAgdGhpcy5fbGRDbGllbnQgPSBsZEluaXRpYWxpemVyKGxkQ2xpZW50QXBpS2V5LCB7XG4gICAgICBrZXk6ICdhbm9uJyxcbiAgICAgIGFub255bW91czogdHJ1ZVxuICAgIH0sIGxkT3B0aW9ucyk7XG5cbiAgICB0aGlzLl9sZENsaWVudC5vbignaW5pdGlhbGl6ZWQnLCAodmFsdWUpID0+IHRoaXMuX3NldEZsYWdzKHZhbHVlKSk7XG5cbiAgICB0aGlzLl9sZENsaWVudC5vbignY2hhbmdlJywgKHZhbHVlKSA9PiB0aGlzLl9zZXRGbGFncyh2YWx1ZSkpO1xuXG4gICAgdGhpcy5fbGRDbGllbnQub24oJ2Vycm9yJywgKGVycm9yKSA9PiB0aGlzLmZsYWdDaGFuZ2UuZXJyb3IoZXJyb3IpKTtcbiAgfVxuXG4gIGNoYW5nZVVzZXIodXNlcjogc3RyaW5nKSB7XG4gICAgY29uc3QgY3VycmVudFVzZXIgPSB0aGlzLl9sZENsaWVudC5nZXRVc2VyKCk7XG5cbiAgICBpZiAoY3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIua2V5ICE9PSB1c2VyKSB7XG4gICAgICBpZiAodXNlciAhPT0gJ0Fub255bW91cycpIHtcbiAgICAgICAgdGhpcy5fbGRDbGllbnQuaWRlbnRpZnkoeyBrZXk6IHVzZXIsIG5hbWU6IHVzZXIsIGFub255bW91czogZmFsc2UgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9sZENsaWVudC5pZGVudGlmeSh7IGtleTogJ2Fub24nLCBhbm9ueW1vdXM6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=
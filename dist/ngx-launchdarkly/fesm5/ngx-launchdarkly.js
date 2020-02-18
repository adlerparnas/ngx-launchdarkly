import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable, Inject, Optional, NgModule, Directive, ViewContainerRef, TemplateRef, Input, defineInjectable, inject } from '@angular/core';
import { initialize } from 'launchdarkly-js-client-sdk';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-launchdarkly.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LAUNCH_DARKLY_INITIALIZER = 'LAUNCH_DARKLY_INITIALIZER';
/** @type {?} */
var LAUNCH_DARKLY_API_KEY = 'LAUNCH_DARKLY_API_KEY';
/** @type {?} */
var LAUNCH_DARKLY_OPTIONS = 'LAUNCH_DARKLY_OPTIONS';
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
    /** @nocollapse */ LaunchDarklyService.ngInjectableDef = defineInjectable({ factory: function LaunchDarklyService_Factory() { return new LaunchDarklyService(inject("LAUNCH_DARKLY_INITIALIZER"), inject("LAUNCH_DARKLY_API_KEY"), inject("LAUNCH_DARKLY_OPTIONS", 8)); }, token: LaunchDarklyService, providedIn: "root" });
    return LaunchDarklyService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-launchdarkly.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxLaunchDarklyContext = /** @class */ (function () {
    function NgxLaunchDarklyContext() {
        this.$implicit = null;
        this.ngxLanchDarkly = null;
    }
    return NgxLaunchDarklyContext;
}());
var NgxLaunchDarklyDirective = /** @class */ (function () {
    function NgxLaunchDarklyDirective(_viewContainer, _ldService, templateRef) {
        this._viewContainer = _viewContainer;
        this._ldService = _ldService;
        this._context = new NgxLaunchDarklyContext();
        this._thenTemplateRef = null;
        this._thenViewRef = null;
        this._flagSubscription = Subscription.EMPTY;
        this._thenTemplateRef = templateRef;
    }
    Object.defineProperty(NgxLaunchDarklyDirective.prototype, "ngxLaunchDarkly", {
        set: /**
         * @param {?} flagName
         * @return {?}
         */
        function (flagName) {
            if (this._currentFlag == null && flagName) {
                this._currentFlag = flagName;
                this._startSubscription();
            }
            else {
                throw new Error('flagName parameter should be bound once');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    NgxLaunchDarklyDirective.prototype._updateView = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._context.$implicit) {
            if (!this._thenViewRef) {
                this._viewContainer.clear();
                if (this._thenTemplateRef) {
                    this._thenViewRef =
                        this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
                }
            }
        }
        else {
            this._viewContainer.clear();
            this._thenViewRef = null;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxLaunchDarklyDirective.prototype._startSubscription = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._flagSubscription = this._ldService.flagChange
            .pipe(map((/**
         * @param {?} flags
         * @return {?}
         */
        function (flags) { return !!flags[_this._currentFlag]; })))
            .subscribe((/**
         * @param {?} flagState
         * @return {?}
         */
        function (flagState) {
            _this._context.$implicit = _this._context.ngxLanchDarkly = flagState;
            _this._updateView();
        }));
    };
    /**
     * @return {?}
     */
    NgxLaunchDarklyDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._flagSubscription.unsubscribe();
    };
    NgxLaunchDarklyDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxLaunchDarkly]'
                },] }
    ];
    /** @nocollapse */
    NgxLaunchDarklyDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: LaunchDarklyService },
        { type: TemplateRef }
    ]; };
    NgxLaunchDarklyDirective.propDecorators = {
        ngxLaunchDarkly: [{ type: Input }]
    };
    return NgxLaunchDarklyDirective;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-launchdarkly.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = initialize;
var NgxLaunchDarklyModule = /** @class */ (function () {
    function NgxLaunchDarklyModule() {
    }
    NgxLaunchDarklyModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgxLaunchDarklyDirective],
                    imports: [],
                    providers: [
                        { provide: LAUNCH_DARKLY_INITIALIZER, useValue: ɵ0 }
                    ],
                    exports: [NgxLaunchDarklyDirective]
                },] }
    ];
    return NgxLaunchDarklyModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-launchdarkly.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LAUNCH_DARKLY_INITIALIZER, LAUNCH_DARKLY_API_KEY, LAUNCH_DARKLY_OPTIONS, LaunchDarklyService, NgxLaunchDarklyContext, NgxLaunchDarklyDirective, NgxLaunchDarklyModule };

//# sourceMappingURL=ngx-launchdarkly.js.map
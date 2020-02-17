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
const LAUNCH_DARKLY_INITIALIZER = 'LAUNCH_DARKLY_INITIALIZER';
/** @type {?} */
const LAUNCH_DARKLY_API_KEY = 'LAUNCH_DARKLY_API_KEY';
/** @type {?} */
const LAUNCH_DARKLY_OPTIONS = 'LAUNCH_DARKLY_OPTIONS';
class LaunchDarklyService {
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
/** @nocollapse */ LaunchDarklyService.ngInjectableDef = defineInjectable({ factory: function LaunchDarklyService_Factory() { return new LaunchDarklyService(inject("LAUNCH_DARKLY_INITIALIZER"), inject("LAUNCH_DARKLY_API_KEY"), inject("LAUNCH_DARKLY_OPTIONS", 8)); }, token: LaunchDarklyService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-launchdarkly.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxLaunchDarklyContext {
    constructor() {
        this.$implicit = null;
        this.ngxLanchDarkly = null;
    }
}
class NgxLaunchDarklyDirective {
    /**
     * @param {?} _viewContainer
     * @param {?} _ldService
     * @param {?} templateRef
     */
    constructor(_viewContainer, _ldService, templateRef) {
        this._viewContainer = _viewContainer;
        this._ldService = _ldService;
        this._context = new NgxLaunchDarklyContext();
        this._thenTemplateRef = null;
        this._thenViewRef = null;
        this._flagSubscription = Subscription.EMPTY;
        this._thenTemplateRef = templateRef;
    }
    /**
     * @param {?} flagName
     * @return {?}
     */
    set ngxLaunchDarkly(flagName) {
        if (this._currentFlag == null && flagName) {
            this._currentFlag = flagName;
            this._startSubscription();
        }
        else {
            throw new Error('flagName parameter should be bound once');
        }
    }
    /**
     * @private
     * @return {?}
     */
    _updateView() {
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
    }
    /**
     * @private
     * @return {?}
     */
    _startSubscription() {
        this._flagSubscription = this._ldService.flagChange
            .pipe(map((/**
         * @param {?} flags
         * @return {?}
         */
        flags => !!flags[this._currentFlag])))
            .subscribe((/**
         * @param {?} flagState
         * @return {?}
         */
        (flagState) => {
            this._context.$implicit = this._context.ngxLanchDarkly = flagState;
            this._updateView();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._flagSubscription.unsubscribe();
    }
}
NgxLaunchDarklyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxLaunchDarkly]'
            },] }
];
/** @nocollapse */
NgxLaunchDarklyDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: LaunchDarklyService },
    { type: TemplateRef }
];
NgxLaunchDarklyDirective.propDecorators = {
    ngxLaunchDarkly: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-launchdarkly.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = initialize;
class NgxLaunchdarklyModule {
}
NgxLaunchdarklyModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxLaunchDarklyDirective],
                imports: [],
                providers: [
                    { provide: LAUNCH_DARKLY_INITIALIZER, useValue: ɵ0 }
                ],
                exports: [NgxLaunchDarklyDirective]
            },] }
];

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

export { LAUNCH_DARKLY_INITIALIZER, LAUNCH_DARKLY_API_KEY, LAUNCH_DARKLY_OPTIONS, LaunchDarklyService, NgxLaunchDarklyContext, NgxLaunchDarklyDirective, NgxLaunchdarklyModule };

//# sourceMappingURL=ngx-launchdarkly.js.map
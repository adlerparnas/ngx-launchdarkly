/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-launchdarkly.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { LaunchDarklyService } from './ngx-launchdarkly.service';
var NgxLaunchDarklyContext = /** @class */ (function () {
    function NgxLaunchDarklyContext() {
        this.$implicit = null;
        this.ngxLanchDarkly = null;
    }
    return NgxLaunchDarklyContext;
}());
export { NgxLaunchDarklyContext };
if (false) {
    /** @type {?} */
    NgxLaunchDarklyContext.prototype.$implicit;
    /** @type {?} */
    NgxLaunchDarklyContext.prototype.ngxLanchDarkly;
}
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
export { NgxLaunchDarklyDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxLaunchDarklyDirective.prototype._context;
    /**
     * @type {?}
     * @private
     */
    NgxLaunchDarklyDirective.prototype._thenTemplateRef;
    /**
     * @type {?}
     * @private
     */
    NgxLaunchDarklyDirective.prototype._thenViewRef;
    /**
     * @type {?}
     * @private
     */
    NgxLaunchDarklyDirective.prototype._currentFlag;
    /**
     * @type {?}
     * @private
     */
    NgxLaunchDarklyDirective.prototype._flagSubscription;
    /**
     * @type {?}
     * @private
     */
    NgxLaunchDarklyDirective.prototype._viewContainer;
    /**
     * @type {?}
     * @private
     */
    NgxLaunchDarklyDirective.prototype._ldService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxhdW5jaGRhcmtseS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbGF1bmNoZGFya2x5LyIsInNvdXJjZXMiOlsibGliL25neC1sYXVuY2hkYXJrbHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUVYLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVqRTtJQUFBO1FBQ1MsY0FBUyxHQUFRLElBQUksQ0FBQztRQUN0QixtQkFBYyxHQUFRLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBQUQsNkJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLDJDQUE2Qjs7SUFDN0IsZ0RBQWtDOztBQUdwQztJQVdFLGtDQUNVLGNBQWdDLEVBQ2hDLFVBQStCLEVBQ3ZDLFdBQWdEO1FBRnhDLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUNoQyxlQUFVLEdBQVYsVUFBVSxDQUFxQjtRQVRqQyxhQUFRLEdBQTJCLElBQUksc0JBQXNCLEVBQUUsQ0FBQztRQUNoRSxxQkFBZ0IsR0FBK0MsSUFBSSxDQUFDO1FBQ3BFLGlCQUFZLEdBQW1ELElBQUksQ0FBQztRQUdwRSxzQkFBaUIsR0FBaUIsWUFBWSxDQUFDLEtBQUssQ0FBQztRQU8zRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxzQkFDSSxxREFBZTs7Ozs7UUFEbkIsVUFDb0IsUUFBZ0I7WUFDbEMsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksSUFBSSxRQUFRLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO2dCQUM3QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUMzQjtpQkFBTTtnQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7YUFDNUQ7UUFDSCxDQUFDOzs7T0FBQTs7Ozs7SUFFTyw4Q0FBVzs7OztJQUFuQjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzVCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUN6QixJQUFJLENBQUMsWUFBWTt3QkFDZixJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ2hGO2FBQ0Y7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7O0lBRU8scURBQWtCOzs7O0lBQTFCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVO2FBQ2hELElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBMUIsQ0FBMEIsRUFBQyxDQUFDO2FBQzlDLFNBQVM7Ozs7UUFBQyxVQUFDLFNBQWtCO1lBQzVCLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztZQUNuRSxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsOENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7O2dCQXZERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtpQkFDOUI7Ozs7Z0JBakJDLGdCQUFnQjtnQkFRVCxtQkFBbUI7Z0JBUDFCLFdBQVc7OztrQ0FpQ1YsS0FBSzs7SUFxQ1IsK0JBQUM7Q0FBQSxBQXhERCxJQXdEQztTQXJEWSx3QkFBd0I7Ozs7OztJQUNuQyw0Q0FBd0U7Ozs7O0lBQ3hFLG9EQUE0RTs7Ozs7SUFDNUUsZ0RBQTRFOzs7OztJQUU1RSxnREFBeUM7Ozs7O0lBQ3pDLHFEQUE2RDs7Ozs7SUFHM0Qsa0RBQXdDOzs7OztJQUN4Qyw4Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIElucHV0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExhdW5jaERhcmtseVNlcnZpY2UgfSBmcm9tICcuL25neC1sYXVuY2hkYXJrbHkuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBOZ3hMYXVuY2hEYXJrbHlDb250ZXh0IHtcbiAgcHVibGljICRpbXBsaWNpdDogYW55ID0gbnVsbDtcbiAgcHVibGljIG5neExhbmNoRGFya2x5OiBhbnkgPSBudWxsO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4TGF1bmNoRGFya2x5XSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4TGF1bmNoRGFya2x5RGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfY29udGV4dDogTmd4TGF1bmNoRGFya2x5Q29udGV4dCA9IG5ldyBOZ3hMYXVuY2hEYXJrbHlDb250ZXh0KCk7XG4gIHByaXZhdGUgX3RoZW5UZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8Tmd4TGF1bmNoRGFya2x5Q29udGV4dD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfdGhlblZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxOZ3hMYXVuY2hEYXJrbHlDb250ZXh0PiB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgX2N1cnJlbnRGbGFnOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX2ZsYWdTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX2xkU2VydmljZTogTGF1bmNoRGFya2x5U2VydmljZSxcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8Tmd4TGF1bmNoRGFya2x5Q29udGV4dD5cbiAgKSB7XG4gICAgdGhpcy5fdGhlblRlbXBsYXRlUmVmID0gdGVtcGxhdGVSZWY7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbmd4TGF1bmNoRGFya2x5KGZsYWdOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fY3VycmVudEZsYWcgPT0gbnVsbCAmJiBmbGFnTmFtZSkge1xuICAgICAgdGhpcy5fY3VycmVudEZsYWcgPSBmbGFnTmFtZTtcbiAgICAgIHRoaXMuX3N0YXJ0U3Vic2NyaXB0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZmxhZ05hbWUgcGFyYW1ldGVyIHNob3VsZCBiZSBib3VuZCBvbmNlJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVmlldygpIHtcbiAgICBpZiAodGhpcy5fY29udGV4dC4kaW1wbGljaXQpIHtcbiAgICAgIGlmICghdGhpcy5fdGhlblZpZXdSZWYpIHtcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgICBpZiAodGhpcy5fdGhlblRlbXBsYXRlUmVmKSB7XG4gICAgICAgICAgdGhpcy5fdGhlblZpZXdSZWYgPVxuICAgICAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fdGhlblRlbXBsYXRlUmVmLCB0aGlzLl9jb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl92aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgICB0aGlzLl90aGVuVmlld1JlZiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3RhcnRTdWJzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fZmxhZ1N1YnNjcmlwdGlvbiA9IHRoaXMuX2xkU2VydmljZS5mbGFnQ2hhbmdlXG4gICAgICAucGlwZShtYXAoZmxhZ3MgPT4gISFmbGFnc1t0aGlzLl9jdXJyZW50RmxhZ10pKVxuICAgICAgLnN1YnNjcmliZSgoZmxhZ1N0YXRlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuJGltcGxpY2l0ID0gdGhpcy5fY29udGV4dC5uZ3hMYW5jaERhcmtseSA9IGZsYWdTdGF0ZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlVmlldygpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9mbGFnU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==
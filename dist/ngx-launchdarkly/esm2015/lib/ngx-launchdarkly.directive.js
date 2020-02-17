/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-launchdarkly.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { LaunchDarklyService } from './ngx-launchdarkly.service';
export class NgxLaunchDarklyContext {
    constructor() {
        this.$implicit = null;
        this.ngxLanchDarkly = null;
    }
}
if (false) {
    /** @type {?} */
    NgxLaunchDarklyContext.prototype.$implicit;
    /** @type {?} */
    NgxLaunchDarklyContext.prototype.ngxLanchDarkly;
}
export class NgxLaunchDarklyDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxhdW5jaGRhcmtseS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbGF1bmNoZGFya2x5LyIsInNvdXJjZXMiOlsibGliL25neC1sYXVuY2hkYXJrbHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUVYLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVqRSxNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBQ1MsY0FBUyxHQUFRLElBQUksQ0FBQztRQUN0QixtQkFBYyxHQUFRLElBQUksQ0FBQztJQUNwQyxDQUFDO0NBQUE7OztJQUZDLDJDQUE2Qjs7SUFDN0IsZ0RBQWtDOztBQU1wQyxNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7SUFRbkMsWUFDVSxjQUFnQyxFQUNoQyxVQUErQixFQUN2QyxXQUFnRDtRQUZ4QyxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFDaEMsZUFBVSxHQUFWLFVBQVUsQ0FBcUI7UUFUakMsYUFBUSxHQUEyQixJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFDaEUscUJBQWdCLEdBQStDLElBQUksQ0FBQztRQUNwRSxpQkFBWSxHQUFtRCxJQUFJLENBQUM7UUFHcEUsc0JBQWlCLEdBQWlCLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFPM0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELElBQ0ksZUFBZSxDQUFDLFFBQWdCO1FBQ2xDLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOzs7OztJQUVPLFdBQVc7UUFDakIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxZQUFZO3dCQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDaEY7YUFDRjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxrQkFBa0I7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTthQUNoRCxJQUFJLENBQUMsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUMsQ0FBQzthQUM5QyxTQUFTOzs7O1FBQUMsQ0FBQyxTQUFrQixFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1lBQ25FLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7OztZQXZERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7OztZQWpCQyxnQkFBZ0I7WUFRVCxtQkFBbUI7WUFQMUIsV0FBVzs7OzhCQWlDVixLQUFLOzs7Ozs7O0lBZk4sNENBQXdFOzs7OztJQUN4RSxvREFBNEU7Ozs7O0lBQzVFLGdEQUE0RTs7Ozs7SUFFNUUsZ0RBQXlDOzs7OztJQUN6QyxxREFBNkQ7Ozs7O0lBRzNELGtEQUF3Qzs7Ozs7SUFDeEMsOENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBUZW1wbGF0ZVJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBJbnB1dCxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMYXVuY2hEYXJrbHlTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtbGF1bmNoZGFya2x5LnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTmd4TGF1bmNoRGFya2x5Q29udGV4dCB7XG4gIHB1YmxpYyAkaW1wbGljaXQ6IGFueSA9IG51bGw7XG4gIHB1YmxpYyBuZ3hMYW5jaERhcmtseTogYW55ID0gbnVsbDtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neExhdW5jaERhcmtseV0nXG59KVxuZXhwb3J0IGNsYXNzIE5neExhdW5jaERhcmtseURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2NvbnRleHQ6IE5neExhdW5jaERhcmtseUNvbnRleHQgPSBuZXcgTmd4TGF1bmNoRGFya2x5Q29udGV4dCgpO1xuICBwcml2YXRlIF90aGVuVGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE5neExhdW5jaERhcmtseUNvbnRleHQ+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3RoZW5WaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8Tmd4TGF1bmNoRGFya2x5Q29udGV4dD4gfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIF9jdXJyZW50RmxhZzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIF9mbGFnU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF9sZFNlcnZpY2U6IExhdW5jaERhcmtseVNlcnZpY2UsXG4gICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE5neExhdW5jaERhcmtseUNvbnRleHQ+XG4gICkge1xuICAgIHRoaXMuX3RoZW5UZW1wbGF0ZVJlZiA9IHRlbXBsYXRlUmVmO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG5neExhdW5jaERhcmtseShmbGFnTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRGbGFnID09IG51bGwgJiYgZmxhZ05hbWUpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRGbGFnID0gZmxhZ05hbWU7XG4gICAgICB0aGlzLl9zdGFydFN1YnNjcmlwdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZsYWdOYW1lIHBhcmFtZXRlciBzaG91bGQgYmUgYm91bmQgb25jZScpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVZpZXcoKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRleHQuJGltcGxpY2l0KSB7XG4gICAgICBpZiAoIXRoaXMuX3RoZW5WaWV3UmVmKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICAgICAgaWYgKHRoaXMuX3RoZW5UZW1wbGF0ZVJlZikge1xuICAgICAgICAgIHRoaXMuX3RoZW5WaWV3UmVmID1cbiAgICAgICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX3RoZW5UZW1wbGF0ZVJlZiwgdGhpcy5fY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgdGhpcy5fdGhlblZpZXdSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N0YXJ0U3Vic2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2ZsYWdTdWJzY3JpcHRpb24gPSB0aGlzLl9sZFNlcnZpY2UuZmxhZ0NoYW5nZVxuICAgICAgLnBpcGUobWFwKGZsYWdzID0+ICEhZmxhZ3NbdGhpcy5fY3VycmVudEZsYWddKSlcbiAgICAgIC5zdWJzY3JpYmUoKGZsYWdTdGF0ZTogYm9vbGVhbikgPT4ge1xuICAgICAgICB0aGlzLl9jb250ZXh0LiRpbXBsaWNpdCA9IHRoaXMuX2NvbnRleHQubmd4TGFuY2hEYXJrbHkgPSBmbGFnU3RhdGU7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVZpZXcoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZmxhZ1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-launchdarkly.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NgxLaunchDarklyDirective } from './ngx-launchdarkly.directive';
import { LAUNCH_DARKLY_INITIALIZER } from './ngx-launchdarkly.service';
import { initialize } from 'launchdarkly-js-client-sdk';
const ɵ0 = initialize;
export class NgxLaunchDarklyModule {
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxhdW5jaGRhcmtseS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbGF1bmNoZGFya2x5LyIsInNvdXJjZXMiOlsibGliL25neC1sYXVuY2hkYXJrbHkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7V0FPSixVQUFVO0FBSTlELE1BQU0sT0FBTyxxQkFBcUI7OztZQVRqQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxFQUNSO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxRQUFRLElBQVksRUFBRTtpQkFDN0Q7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4TGF1bmNoRGFya2x5RGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtbGF1bmNoZGFya2x5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMQVVOQ0hfREFSS0xZX0lOSVRJQUxJWkVSIH0gZnJvbSAnLi9uZ3gtbGF1bmNoZGFya2x5LnNlcnZpY2UnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJ2xhdW5jaGRhcmtseS1qcy1jbGllbnQtc2RrJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTmd4TGF1bmNoRGFya2x5RGlyZWN0aXZlXSxcbiAgaW1wb3J0czogW1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IExBVU5DSF9EQVJLTFlfSU5JVElBTElaRVIsIHVzZVZhbHVlOiBpbml0aWFsaXplIH1cbiAgXSxcbiAgZXhwb3J0czogW05neExhdW5jaERhcmtseURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4TGF1bmNoRGFya2x5TW9kdWxlIHsgfVxuIl19
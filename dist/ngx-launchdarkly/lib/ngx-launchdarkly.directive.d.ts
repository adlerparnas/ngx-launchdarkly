import { ViewContainerRef, TemplateRef, OnDestroy } from '@angular/core';
import { LaunchDarklyService } from './ngx-launchdarkly.service';
export declare class NgxLaunchDarklyContext {
    $implicit: any;
    ngxLanchDarkly: any;
}
export declare class NgxLaunchDarklyDirective implements OnDestroy {
    private _viewContainer;
    private _ldService;
    private _context;
    private _thenTemplateRef;
    private _thenViewRef;
    private _currentFlag;
    private _flagSubscription;
    constructor(_viewContainer: ViewContainerRef, _ldService: LaunchDarklyService, templateRef: TemplateRef<NgxLaunchDarklyContext>);
    ngxLaunchDarkly: string;
    private _updateView;
    private _startSubscription;
    ngOnDestroy(): void;
}

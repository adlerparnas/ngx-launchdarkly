import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  EmbeddedViewRef,
  Input,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { LaunchDarklyService } from './ngx-launchdarkly.service';

export class NgxLaunchDarklyContext {
  public $implicit: any = null;
  public ngxLanchDarkly: any = null;
}

@Directive({
  selector: '[ngxLaunchDarkly]'
})
export class NgxLaunchDarklyDirective implements OnDestroy {
  private _context: NgxLaunchDarklyContext = new NgxLaunchDarklyContext();
  private _thenTemplateRef: TemplateRef<NgxLaunchDarklyContext> | null = null;
  private _thenViewRef: EmbeddedViewRef<NgxLaunchDarklyContext> | null = null;

  private _currentFlag: string | undefined;
  private _flagSubscription: Subscription = Subscription.EMPTY;

  constructor(
    private _viewContainer: ViewContainerRef,
    private _ldService: LaunchDarklyService,
    templateRef: TemplateRef<NgxLaunchDarklyContext>
  ) {
    this._thenTemplateRef = templateRef;
  }

  @Input()
  set ngxLaunchDarkly(flagName: string) {
    if (this._currentFlag == null && flagName) {
      this._currentFlag = flagName;
      this._startSubscription();
    } else {
      throw new Error('flagName parameter should be bound once');
    }
  }

  private _updateView() {
    if (this._context.$implicit) {
      if (!this._thenViewRef) {
        this._viewContainer.clear();
        if (this._thenTemplateRef) {
          this._thenViewRef =
            this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
        }
      }
    } else {
      this._viewContainer.clear();
      this._thenViewRef = null;
    }
  }

  private _startSubscription() {
    this._flagSubscription = this._ldService.flagChange
      .pipe(map(flags => !!flags[this._currentFlag]))
      .subscribe((flagState: boolean) => {
        this._context.$implicit = this._context.ngxLanchDarkly = flagState;
        this._updateView();
      });
  }

  ngOnDestroy() {
    this._flagSubscription.unsubscribe();
  }
}

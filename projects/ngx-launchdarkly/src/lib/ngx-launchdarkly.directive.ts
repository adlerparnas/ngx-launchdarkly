import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  EmbeddedViewRef,
  Input,
  OnDestroy
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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

  private _value$ = new BehaviorSubject(true);

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
      if (flagName[0] === '!') {
        this._value$.next(false);
        flagName = flagName.slice(1);
      }
      this._currentFlag = flagName;
      this._startSubscription();
    } else {
      throw new Error('flagName parameter should be bound once');
    }
  }

  @Input('ngxLaunchDarklyValue')
  set ngxLaunchDarklyValue(value) {
    this._value$.next(value);
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
      .pipe(
        map(flags => {
          if (flags[this._currentFlag] === undefined || flags[this._currentFlag] === null) {
            return false;
          }
          return flags[this._currentFlag];
        }),
        switchMap((flagState) => this._value$.pipe(
          map((value) => value === flagState))
        ),
      )
      .subscribe((flagState: boolean) => {
        this._context.$implicit = this._context.ngxLanchDarkly = flagState;
        this._updateView();
      });
  }

  ngOnDestroy() {
    this._flagSubscription.unsubscribe();
  }
}

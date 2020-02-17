import { NgModule } from '@angular/core';
import { NgxLaunchDarklyDirective } from './ngx-launchdarkly.directive';
import { LAUNCH_DARKLY_INITIALIZER } from './ngx-launchdarkly.service';
import { initialize } from 'launchdarkly-js-client-sdk';

@NgModule({
  declarations: [NgxLaunchDarklyDirective],
  imports: [
  ],
  providers: [
    { provide: LAUNCH_DARKLY_INITIALIZER, useValue: initialize }
  ],
  exports: [NgxLaunchDarklyDirective]
})
export class NgxLaunchDarklyModule { }

# ngx-launchdarkly

Angular library for [LaunchDarkly](https://launchdarkly.com/) integration.

## Installation

First you need to install the npm module:

```sh
npm install ngx-launchdarkly
```


## Usage

#### 1. Configure the `NgxLaunchDarklyModule` to user the correct Client ID Key:

In your module, you have to provide the ClientID API Key. This is the _Client_ not the _Mobile_ key.

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxLaunchDarklyModule} from 'ngx-launchdarkly';

@NgModule({
    imports: [
        BrowserModule,
        NgxLaunchDarklyModule,
    ],
    providers: [
      { provide: LAUNCH_DARKLY_API_KEY, useValue: 'MY_CLIENT_ID_KEY' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 1. Import the `NgxLaunchDarklyModule`:

```ts
import {NgxLaunchDarklyModule} from 'ngx-launchdarkly';

@NgModule({
    imports: [
        NgxLaunchDarklyModule,
    ],
})
export class MyComponentModule { }
```

#### 3. Use the directive in your templates to disable components based in your flags

```html
<div>
  <app-my-custom-component *ngxLaunchDarkly="'myCustomFlag'"></app-my-custom-component>
</div>
```

You can also negate a flag:

```html
<div>
  <app-my-custom-component *ngxLaunchDarkly="'!myCustomFlag'"></app-my-custom-component>
  <app-my-custom-component *ngxLaunchDarkly="'myCustomFlag';value:false"></app-my-custom-component>
</div>
```

You can also tie it to a non-boolean value:

```html
<div>
  <app-my-custom-component *ngxLaunchDarkly="'myStringFlag';value:'valueOne'"></app-my-custom-component>
  <app-my-custom-component *ngxLaunchDarkly="'myStringFlag';value:'valueTwo'"></app-my-custom-component>
</div>
```


#### 4. Set the current user to allow feature segregation

```ts
import {Component} from '@angular/core';
import {LaunchDarklyService} from 'ngx-launchdarkly';

@Component({
    selector: 'app',
    template: `
        <div>
          <app-my-custom-component *ngxLaunchDarkly="'myCustomFlag'"></app-my-custom-component>
        </div>
    `
})
export class AppComponent {
    param = {value: 'world'};

    constructor(ldService: LaunchDarklyService) {
        ldService.changeUser('my-special-user');
    }
}
```

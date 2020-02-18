# ngx-lauchdarkly

Angular library for [LaunchDarkly](https://launchdarkly.com/) integration.

## Installation

First you need to install the npm module:

```sh
npm install ngx-launchdarkly --save
```


## Usage

#### 1. Import the `NgxLaunchDarklyModule`:

Finally, you can use ngx-launchdarkly in your Angular project. You have to import `NgxLaunchDarklyModule` in the root NgModule of your application.

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxLaunchDarklyModule} from 'ngx-launchdarkly';

@NgModule({
    imports: [
        BrowserModule,
        NgxLaunchDarklyModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 2. Configure the `NgxLaunchDarklyModule` to user the correct Client ID Key:

In your module, you have to provide the ClientID Api Key

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxLaunchDarklyModule} from 'ngx-launchdarkly';

@NgModule({
    imports: [
        BrowserModule,
        NgxLaunchDarklyModule.forRoot()
    ],
    providers: [
      { provide: LAUNCH_DARKLY_API_KEY, useValue: 'MY_CLIENT_ID_KEY' }
    ]
    bootstrap: [AppComponent]
})
export class AppModule { }
```


#### 3. Use the directive in your templates to disable components based in your flags

```html
<div>
  <app-my-custom-component *ngxLaunchDarkly="'myCustomFlag'"></app-my-custom-component>
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
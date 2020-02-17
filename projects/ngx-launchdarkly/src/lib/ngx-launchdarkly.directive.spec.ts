import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';

import { NgxLaunchDarklyDirective } from './ngx-launchdarkly.directive';
import { LaunchDarklyService } from './ngx-launchdarkly.service';

@Component({
  template: `<div id="targetComp" type="text" *ngxLaunchDarkly="'my-flag'">my content</div>`
})
class TestComponent {
}

describe('NgxLaunchdarklyDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  const mockedLDService = {
    flagChange: new Subject<any>()
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, NgxLaunchDarklyDirective],
      providers: [
        { provide: LaunchDarklyService, useValue: mockedLDService }
      ]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('it should display the element only when the flag is on', () => {
    fixture.detectChanges();

    let targetComp = fixture.debugElement.query(By.css('#targetComp'));
    expect(targetComp).toBeNull();

    mockedLDService.flagChange.next({ 'my-flag': true });

    fixture.detectChanges();

    targetComp = fixture.debugElement.query(By.css('#targetComp'));

    expect(targetComp).not.toBeNull();
  });
});

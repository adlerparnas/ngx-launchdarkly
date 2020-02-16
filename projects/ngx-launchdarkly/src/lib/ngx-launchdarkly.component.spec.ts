import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLaunchdarklyComponent } from './ngx-launchdarkly.component';

describe('NgxLaunchdarklyComponent', () => {
  let component: NgxLaunchdarklyComponent;
  let fixture: ComponentFixture<NgxLaunchdarklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLaunchdarklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLaunchdarklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { AuthOptions, FinishedData } from '@stacks/connect';
import { ReplaySubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <app-stacks-sign-in-button (onSignIn)="stacksAuth$.next()"></app-stacks-sign-in-button>
    <code>
      <pre>{{ authResponse$ | async | json }}</pre>
    </code>
  `,
})

export class AppComponent {
  stacksAuth$ = new Subject<void>();
  authResponse$ = new ReplaySubject<FinishedData>(1);

  authOptions: AuthOptions = {
    finished: response => this.authResponse$.next(response),
    appDetails: { name: 'Angular Stacks Connect Demo', icon: 'http://placekitten.com/g/100/100' },
  };

  ngOnInit() {
    this.stacksAuth$
      .pipe(switchMap(() => import('@stacks/connect')))
      .subscribe(connectLibrary => connectLibrary.showBlockstackConnect(this.authOptions));
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stacks-sign-in-button',
  template: ` <button (click)="onSignIn.emit()">Sign In</button> `,
})
export class StacksSignInButtonComponent {
  @Output() onSignIn = new EventEmitter();
}
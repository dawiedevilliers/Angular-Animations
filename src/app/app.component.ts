import { Component } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'app';
  show = false;

  constructor() {

  }

  get StateName() {
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    this.show = !this.show;
  }


}

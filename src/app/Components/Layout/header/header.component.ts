import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-component',
  template: `
  <header>
    <img src="/assets/logo.svg" width="70" height="70" alt="MotoStats Branding">
    <h1>{{title}}</h1>
    <navigation-component></navigation-component>
  </header>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string;

  constructor() {

    console.log('HeaderComponent');

  }

}

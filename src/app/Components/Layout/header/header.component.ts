import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-component',
  template: `
  <header>
    <div id="branding">
      <img src="/assets/logo.svg" width="35" height="35" alt="MotoStats Branding">
      <h1>{{title}}</h1>
    </div>
    <navigation-component></navigation-component>
  </header>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string;

}

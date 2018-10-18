import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-component',
  template: `<header><h1>{{title}}</h1></header>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string;

  constructor() {

    console.log('HeaderComponent');

  }

}

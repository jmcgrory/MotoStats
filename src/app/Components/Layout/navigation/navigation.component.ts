import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-component',
  template: `
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/bikes">Bikes</a></li>
      <li><a routerLink="/contact">Contact</a></li>
    </ul>
  `,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-component',
  template: `
    <ul>
      <li><a>Home</a></li>
      <li><a>Bikes</a></li>
      <li><a>Compare</a></li>
      <li><a>Contact</a></li>
    </ul>
  `,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

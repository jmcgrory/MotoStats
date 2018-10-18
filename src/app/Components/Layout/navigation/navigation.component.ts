import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-component',
  template: `
    <p>
      navigation works!
    </p>
  `,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

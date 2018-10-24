import { Component } from '@angular/core';

@Component({
  selector: 'footer-component',
  template: `<footer>&copy; Copyright Jamie McGrory {{year}} | <a>Terms & Conditions</a></footer>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  year: number;

  constructor() {

    const date = new Date();

    this.year = date.getFullYear();

  }

}

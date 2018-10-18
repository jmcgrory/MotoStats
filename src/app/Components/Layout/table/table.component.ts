import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-component',
  template: `
    <p>
      table works!
    </p>
  `,
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import BikeModel from '../../../models/BikeModel';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  model = BikeModel;

  log = (val) => console.log(val);

  columns: string[] = Object.keys(BikeModel.getProperties(false));

  getRandomFromArray = (array: string[]): string => {

    return array[Math.floor(Math.random() * array.length)];

  }

  manufacturers = [

    'Honda',

    'Triumph',

    'Ducati',

    'Kawasaki'

  ];

  models = [

    'Viper',

    'FST',

    'Supercruiser',

    'Speciale',

    'XTR',

    'Hawk',

    'Scrambler',

    'V5',

    'Baja'

  ];

  private getPlaceholderData = (): object => {

    return {

      id: Math.floor(Math.random() * 100),

      manufacturer: this.getRandomFromArray(this.manufacturers),

      displacement: Math.floor(Math.random() * 1600),

      year: 1988 + (Math.floor(Math.random() * 30)),

      hasABS: (Math.round(Math.random()) ? 'Yes' : 'No'),

      model: this.getRandomFromArray(this.models)

    }

  }

  rows: BikeModel[] = [

    new BikeModel(this.getPlaceholderData()),

    new BikeModel(this.getPlaceholderData()),

    new BikeModel(this.getPlaceholderData()),

    new BikeModel(this.getPlaceholderData()),

    new BikeModel(this.getPlaceholderData()),

    new BikeModel(this.getPlaceholderData()),

    new BikeModel(this.getPlaceholderData()),

    new BikeModel(this.getPlaceholderData())

  ];

  constructor() { }

  ngOnInit() {
  }

}

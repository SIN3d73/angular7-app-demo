import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'de-basics-functions',
  templateUrl: './basics-functions.component.html',
  styleUrls: ['./basics-functions.component.scss']
})
export class BasicsFunctionsComponent implements OnInit {

  date: Date = new Date();
  yearsCount: number = null;

  constructor() {
  }

  ngOnInit() {
  }

  onResetDate() {
    this.date = new Date();
  }

  onAddYears(years: number){
    this.date = moment(this.date).add(years, 'year').toDate();
  }

}

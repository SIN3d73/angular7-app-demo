import {Component, OnInit} from '@angular/core';
import {Programmer} from "../models/programmer";

@Component({
  selector: 'de-basics-lists',
  templateUrl: './basics-lists.component.html',
  styleUrls: ['./basics-lists.component.scss']
})
export class BasicsListsComponent implements OnInit {

  list: string[] = ['Kebab', 'Kefir', 'Baobab'];

  objectList: Programmer[] = [
    {
      name: 'Pietia',
      imagePath: 'http://via.placeholder.com/50?text=P',
      expYears: 3,
    },
    {
      name: 'Karol',
      imagePath: 'http://via.placeholder.com/50?text=K',
      expYears: 8,
    },
    {
      name: 'Marcinek',
      imagePath: null,
      expYears: 0,
    }
  ];

  filterModel: string;

  seniorYear = 7;
  defaultImagePath = 'http://via.placeholder.com/50/eee?text=?';

  constructor() {
  }

  ngOnInit() {
  }

  onItemClick(item, index) {
    window.alert(index + '. ' + item + ' clicked!');
  }

}

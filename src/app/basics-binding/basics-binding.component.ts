import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'de-basics-binding',
  templateUrl: './basics-binding.component.html',
  styleUrls: ['./basics-binding.component.scss']
})
export class BasicsBindingComponent implements OnInit {

  hello: string = 'Hello!';

  constructor() {
  }

  ngOnInit() {
  }

}

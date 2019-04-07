import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'de-instant-table',
  templateUrl: './instant-table.component.html',
  styleUrls: ['./instant-table.component.scss']
})
export class InstantTableComponent implements OnInit {

  @Input() data: any[];
  @Input() columns: string[];
  @Output() editClick = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onEditClick(id: number) {
    this.editClick.emit(id);
  }

}

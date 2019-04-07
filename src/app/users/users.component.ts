import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'de-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  myColumns: string[] = ['name', 'task', 'workProgress'];

  myDataRows: User[] = [];

  constructor(private usersService: UsersService,
              private router: Router) {
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((users) => {
      this.myDataRows = users;
    });
  }

  onEditClick(id: number) {
    this.router.navigate(['/users', id]);
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../users.service';

@Component({
  selector: 'de-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UsersService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.userService.getUserDetails(param.id).subscribe((data) => {
        console.log(data);
      });
    });
  }

}

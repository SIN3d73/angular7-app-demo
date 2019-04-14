import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../users.service';
import {UpdateUserDto} from '../models/update-user-dto';

@Component({
  selector: 'de-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userModel: UpdateUserDto = new UpdateUserDto();

  constructor(private userService: UsersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.userService.getUserDetails(param.id).subscribe((data) => {
        this.userModel = data as UpdateUserDto;
        // this.userModel = <UpdateUserDto>data;
      });
    });
  }

  onFormSubmit(){
    this.userService.updateUser(this.userModel).subscribe(()=>{
      this.router.navigate(['/users'])
    })
  }

}

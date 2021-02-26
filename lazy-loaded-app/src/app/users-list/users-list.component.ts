import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public users$;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users$ = this.usersService.getUsers();
  }

}

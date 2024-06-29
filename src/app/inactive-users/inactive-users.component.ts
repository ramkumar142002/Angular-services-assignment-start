import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../users.service';
import { CounterService } from '../counet.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService, private counterService: CounterService){}
  ngOnInit(){
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
    // this.counterService.incrementItoA();
  }
}

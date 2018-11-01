import { Component } from '@angular/core';
import { UserService } from '../core/user-service';
import { User } from '../core/user-model';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})

export class CreateFormComponent {
  constructor(private userService: UserService) {}

  currentUser: User;

  newUser(user: User) {
    this.currentUser = user;
    console.log(this.currentUser);
    console.log(localStorage);
  }
}

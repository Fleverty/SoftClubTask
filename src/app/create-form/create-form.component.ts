import { Component } from '@angular/core';
import { UserService } from '../user/user-service';
import { User } from '../user/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})

export class CreateFormComponent {
  constructor(private userService: UserService, private router: Router) {}

  currentUser: User;

  newUser(user: User) {
    this.userService.login(user);
    this.router.navigate(['settings']);
  }
}

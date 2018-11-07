import { Injectable } from '@angular/core';
import { User } from './user-model';
import { USERS } from './user-mocks';

@Injectable()
export class UserService {
  getUser(user: User): User {
    return USERS.find((el) => {
      if (el.nickname === user.nickname && el.email === user.email) { return true; }
      return false;
    });
  }

  login(user: User) {
    if (this.getUser(user)) {
      localStorage.currentUser = JSON.stringify(user);
    } else {
      USERS.push(user);
      localStorage.currentUser = JSON.stringify(user);
    }
    localStorage.game = JSON.stringify(new Map());
  }

  getUserByNick(nickname: string) {
    return USERS.find((el) => el.nickname === nickname);
  }
}

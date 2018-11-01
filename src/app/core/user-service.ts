import { Injectable } from '@angular/core';
import { User } from './user-model';
import { USERS } from './user-mocks';

@Injectable()
export class UserService {
  getUser(nickname: string): User {
    return USERS.find((el) => el.nickname === nickname);
  }
  findUser(nickname: string): Boolean {
    return USERS.findIndex((user) => user.nickname === nickname) >= 0 ? true : false;
  }
}

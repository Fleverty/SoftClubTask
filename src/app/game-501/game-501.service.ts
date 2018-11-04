import { Injectable } from '@angular/core';
import { User } from '../user/user-model';

@Injectable()
export class Game501Service {
  map: Map<User, number> = new Map();
  makeGame(users: User[]) {
    users.forEach((el) => {
      this.map.set(el, 501);
    });
  }
  makeMove(move: Map<User, number>) {
    this.map.forEach((value, key, map) => {
      map.set(key, value - move.get(key));
    });
  }
  getGame() {
    // this.map.forEach( (value, key) => {
    //   console.log(`${key.nickname}: ${value}`);
    // });
    return this.map;
  }
}

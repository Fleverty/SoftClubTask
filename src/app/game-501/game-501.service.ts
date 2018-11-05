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
    const obj = {
      players: [],
      score: 501,
      status: 'leader',
    };
    this.map.forEach((value, key, map) => {
      if (value - move.get(key) >= 0) {
        map.set(key, value - move.get(key));
      }
    });
    console.log(this.map);
    this.map.forEach((value, key) => {
      if (value < obj.score) {
        console.log('<', key.nickname);
        obj.players = new Array(key.nickname);
        obj.score = value;
      } else if (value === obj.score) {
        console.log('=', key.nickname);
        obj.players.push(key.nickname);
      } else if (value === 0) {
        console.log('0', key.nickname);
        obj.players = new Array(key.nickname);
        obj.score = value;
        status = 'winner';
      }
    });
    return obj;
  }
  getGame() {
    return this.map;
  }
}

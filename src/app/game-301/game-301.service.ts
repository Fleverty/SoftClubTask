import { Injectable } from '@angular/core';
import { User } from '../user/user-model';

@Injectable()
export class Game301Service {
  map: Map<User, number> = new Map();
  makeGame(users: User[]) {
    this.map = new Map();
    users.forEach(el => this.map.set(el, 0));
  }

  getUsers() {
    return JSON.parse(localStorage.listOfPlayers);
  }

  makeMove(move: Map<User, number>) {
    const obj = {
      players: [],
      score: 0,
      status: 'leader',
    };
    this.map.forEach((value, key, map) => {
      if (value + move.get(key) <= 301) {
        map.set(key, value + move.get(key));
      }
      if (this.findRepeat(key)) {
        map.set(key, 0);
      }
    });
    this.map.forEach((value, key) => { // определяем текущих лидеров
      if (value > obj.score) {
        obj.players = new Array();
        obj.players.push(key.nickname);
        obj.score = value;
      } else if (value === 301) {
        obj.players.push(key.nickname);
        obj.score = value;
        status = 'winner';
      }
    });

    return obj;
  }

  findRepeat(user: User) {
    const number: number = this.map.get(user);
    let checker: Boolean = false;
    this.map.forEach((value, key) => {
      if (number === value && key !== user) {
        checker = true;
      }
    });
    return checker;
  }

  getGame() {
    return this.map;
  }
}

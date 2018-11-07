import { Injectable } from '@angular/core';
import { User } from '../user/user-model';

@Injectable()
export class Game501Service {
  map: Map<User, number> = new Map();

  makeGame(users: User[]) {
    this.map = new Map();
    users.forEach((el) => {
      this.map.set(el, 501);
    });
  }
  getUsers() {
    return JSON.parse(localStorage.listOfPlayers);
  }
  makeMove(move: Map<User, Object>) {
    const obj = {
      players: [],
      score: 501,
      status: 'leader',
    };

    this.map.forEach((value, key, map) => {
      if (value - move.get(key)['score'] > 0) {
        map.set(key, value - move.get(key)['score']);
      } else if (value - move.get(key)['score'] === 0 && move.get(key)['has2x']) {
        map.set(key, value - move.get(key)['score']);
      }
    });

    this.map.forEach((value, key) => {
      if (value < obj.score) {
        obj.players = new Array(key.nickname);
        obj.score = value;
      } else if (value === obj.score) {
        obj.players.push(key.nickname);
      } else if (value === 0) {
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

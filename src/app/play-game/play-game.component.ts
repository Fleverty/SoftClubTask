import { Component, OnInit } from '@angular/core';
import { Game501Service } from '../game-501/game-501.service';
import { USERS } from '../user/user-mocks';
import { User } from '../user/user-model';
import { element } from 'protractor';

@Component({
  selector: 'app-play-game',
  templateUrl: 'play-game.component.html',
  styleUrls: ['play-game.component.css'],
})

export class PlayGameComponent implements OnInit {
  users: User[] = USERS;
  click: Boolean = false;
  games: Map<User, number>[] = [];
  endGame: Boolean = false;
  score: Object  = {players: [], score: 501, status: ''};
  constructor(private game501: Game501Service) {
    this.game501.makeGame(USERS);
    this.games.push(new Map(this.game501.getGame()));
  }
  dartsMove: Object = {
    first: 0,
    second: 0,
    third: 0,
  }; // объект бросков
  oneMove: Map<User, Object> = new Map(); // мэп одного хода
  ngOnInit() {
  this.users.forEach(el => {
    this.oneMove.set(el, Object.assign({}, this.dartsMove));
  });
  }
  func(player: User, map: Map<User, Object>) {
    this.oneMove.set(player, map.get(player));
  }
  makeMove() {
    if (!this.endGame) {
    const move: Map<User, number> = new Map();
    this.oneMove.forEach((value, key) => {
      move.set(key, value['first'] + value['second'] + value['third']);
    });
    this.score = this.game501.makeMove(move);
    const map: Map<User, number> = new Map(this.game501.getGame());
    this.games.push(map);
    if (this.games.length === 20 && this.score['players'].length === 1) {
      this.endGame = true;
    } else if (this.games.length === 30) {
      this.endGame = true;
    } else if (this.score['score'] === 0) {
      this.endGame = true;
    }
    }
  }
}

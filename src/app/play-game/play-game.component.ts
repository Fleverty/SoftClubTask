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
  // users: User[] = USERS;
  users: User[] = [];
  click: Boolean = false;
  games: Map<User, number>[] = [];
  endGame: Boolean = false;
  score: Object  = {players: [], score: 501, status: ''};

  constructor(private game501: Game501Service) {
    // this.users = this.game501.getUsers();
    this.users = JSON.parse(localStorage.listOfPlayers);
    this.game501.makeGame(this.users);
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
    console.log('output', map);
    this.oneMove.set(player, map.get(player));
    console.log('output 2', this.oneMove);
  }

  makeMove() {
    if (!this.endGame) {
      const move: Map<User, Object> = new Map();
      this.oneMove.forEach((value, key) => {
        move.set(key,
          {
            score: value['first'] + value['second'] + value['third'],
            has2x: value['has2x']['first'] || value['has2x']['second'] || value['has2x']['third'],
          }
        );
      });
      console.log('make move', move);
      this.score = this.game501.makeMove(move);
      const map: Map<User, number> = new Map(this.game501.getGame());
      this.games.push(map);
      console.log('new move', map);
      this.clearInputs();
    if (this.games.length === 21 && this.score['players'].length === 1) {
      this.endGame = true;
    } else if (this.games.length === 31) {
      this.endGame = true;
    } else if (this.score['score'] === 0) {
      this.endGame = true;
    }
    }
  }

  clearInputs() {
    for (let i = 0; i < 3 * this.users.length; i++) {
      document.querySelectorAll('input.points').item(i)['value'] = ``;
    }
  }
  newGame() {
    this.clearInputs();
    this.endGame = false;
    // this.games.length = 1;
    // this.game501.makeGame(this.users);
    this.games.length = 0;
    this.game501.makeGame(this.users);
    this.games.push(new Map(this.game501.getGame()));
    this.users.forEach(el => {
      this.oneMove.set(el, {});
    });
  }

}

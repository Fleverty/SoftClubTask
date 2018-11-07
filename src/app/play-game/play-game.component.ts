import { Component} from '@angular/core';
import { Game501Service } from '../game-501/game-501.service';
import { USERS } from '../user/user-mocks';
import { User } from '../user/user-model';
import { element } from 'protractor';

@Component({
  selector: 'app-play-game',
  templateUrl: 'play-game.component.html',
  styleUrls: ['play-game.component.css'],
})

export class PlayGameComponent {
  users: User[] = [];
  click: Boolean = false;
  games: Map<User, number>[] = [];
  endGame: Boolean = false;
  score: Object  = {players: [], score: 501, status: ''};

  constructor(private game501: Game501Service) {
    this.users = JSON.parse(localStorage.listOfPlayers);
    this.game501.makeGame(this.users);
    this.games.push(new Map(this.game501.getGame()));
    this.users.forEach(el => {
      this.oneMove.set(el, {});
    });
  }

  oneMove: Map<User, Object> = new Map(); // мэп одного хода

  func(player: User, map: Map<User, Object>) {
    this.oneMove.set(player, map.get(player));
  }

  makeMove() { // делаем один ход
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

      this.score = this.game501.makeMove(move);
      const map: Map<User, number> = new Map(this.game501.getGame());
      this.games.push(map);
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

  clearInputs() { // очищаем инпуты
    for (let i = 0; i < 3 * this.users.length; i++) {
      document.querySelectorAll('input.points').item(i)['value'] = ``;
    }
    this.users.forEach(el => {
      this.oneMove.set(el, {});
    });
  }

  newGame() { // начинаем новую игру
    this.clearInputs();
    this.endGame = false;
    this.games.length = 0;
    this.game501.makeGame(this.users);
    this.games.push(new Map(this.game501.getGame()));
  }

}

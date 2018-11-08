import { Component} from '@angular/core';
import { Game301Service } from '../game-301/game-301.service';
import { USERS } from '../user/user-mocks';
import { User } from '../user/user-model';

@Component({
  selector: 'app-play-game-301',
  templateUrl: 'play-game-301.component.html',
  styleUrls: ['play-game-301.component.css'],
})

export class PlayGame301Component {
  users: User[] = [];
  click: Boolean = false;
  games: Map<User, number>[] = [];
  endGame: Boolean = false;
  score: Object  = {players: [], score: 501, status: ''};

  constructor(private game301: Game301Service) {
    this.users = JSON.parse(localStorage.listOfPlayers);
    this.game301.makeGame(this.users);
    this.games.push(new Map(this.game301.getGame()));
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
      const move: Map<User, number> = new Map();

      this.oneMove.forEach((value, key) => {
        move.set(key, value['first'] + value['second'] + value['third']);
      });

      this.score = this.game301.makeMove(move);
      const map: Map<User, number> = new Map(this.game301.getGame());
      this.games.push(map);
      this.clearInputs();

      if (this.score['score'] === 301) {
        this.endGame = true;
      }
    }
  }

  clearInputs() { // очищаем инпуты
    for (let i = 0; i < 3 * this.users.length; i++) {
      document.querySelectorAll('input.points').item(i)['value'] = ``;
    }
    const elements: HTMLCollection = document.getElementsByClassName('radio-group');
    for (let i = 0; i < 3 * this.users.length; i++) {
      elements[i][0].checked = true;
      elements[i][1].checked = false;
      elements[i][2].checked = false;
    }
    this.users.forEach(el => {
      this.oneMove.set(el, {});
    });
  }

  newGame() { // начинаем новую игру
    this.clearInputs();
    this.endGame = false;
    this.games.length = 0;
    this.game301.makeGame(this.users);
    this.games.push(new Map(this.game301.getGame()));
  }

}

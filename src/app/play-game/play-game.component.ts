import { Component, OnInit } from '@angular/core';
import { Game501Service } from '../game-501/game-501.service';
import { USERS } from '../user/user-mocks';
import { User } from '../user/user-model';
import { element } from 'protractor';

@Component({
  selector: 'app-play-game',
  templateUrl: 'play-game.component.html',
  styles: ['play-game.component.css'],
})

export class PlayGameComponent implements OnInit {
  users: User[] = USERS;
  constructor(private game501: Game501Service) {
    this.game501.makeGame(USERS);
    // const map = new Map();
    // USERS.forEach((el) => {
    //   map.set(el, 23);
    // });
    // this.game501.makeMove(map);
    // console.log(this.game501.getGame());
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
  func(event: any, user: User, bonus: number, dart: string) {
    const a = this.oneMove.get(user);
    if (a[dart] === event.target.value * bonus) {
      return;
    } else {
      a[dart] = event.target.value * bonus;
      this.oneMove.set(user, a);
    }
  }
  makeMove() {
    const move: Map<User, number> = new Map();
    this.oneMove.forEach((value, key) => {
      move.set(key, value['first'] + value['second'] + value['third']);
    });
    this.game501.makeMove(move);
    console.log(this.game501.getGame());
  }
}

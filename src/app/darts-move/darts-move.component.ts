import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user/user-model';

@Component({
  selector: 'app-darts-move',
  templateUrl: './darts-move.component.html',
  styleUrls: ['./darts-move.component.css'],
})

export class DartsMoveComponent implements OnInit {
  @Input() player: User;
  @Output() finalMove: EventEmitter<Map<User, Object>> = new EventEmitter();

  myBonus1: String = '1';
  myBonus2: String = '1';
  myBonus3: String = '1';

  dartsMove: Object = {
    first: 0,
    second: 0,
    third: 0,
  }; // объект бросков

  oneMove: Map<User, Object> = new Map(); // мэп одного хода

  ngOnInit() {
    this.oneMove.set(this.player, Object.assign({}, this.dartsMove));
  }

  func(event: number, user: User, bonus: number, dart: string) {
    const a = this.oneMove.get(user);
    const bonusInteger = bonus[`${dart}-${user.nickname}`];
    if (a[dart] === +event * +bonusInteger) {
      return;
    } else {
      a[dart] = +event * +bonusInteger;
      this.oneMove.set(user, a);
    }
    this.finalMove.emit(this.oneMove);
  }
}

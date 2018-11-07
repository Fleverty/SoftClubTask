import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
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
    has2x: {
      first: false,
      second: false,
      third: false,
    }
  }; // объект бросков

  oneMove: Map<User, Object> = new Map(); // мэп одного хода

  ngOnInit() {
    this.oneMove.set(this.player, Object.assign({}, this.dartsMove));
  }

  func(event: number, user: User, bonus: number, dart: string) {
    console.log('a');
    const a = this.oneMove.get(user);
    const bonusInteger = bonus[`${dart}-${user.nickname}`];
    this.finalMove.emit(new Map());
    a[dart] = +event * +bonusInteger;
    if (+bonusInteger === 2) {
      a['has2x'][dart] = true;
    } else if (+bonusInteger !== 2 && a['has2x'][dart]) {
      a['has2x'][dart] = false;
    }
    this.oneMove.set(user, a);
    console.log('one move', this.oneMove);
    this.finalMove.emit(this.oneMove);
  }
}

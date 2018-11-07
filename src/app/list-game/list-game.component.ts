import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../user/user-model';
import { Game501Service } from '../game-501/game-501.service';

@Component({
  selector: 'app-list-game',
  templateUrl: 'list-game.component.html',
  styleUrls: ['list-game.component.css'],
})

export class ListGameComponent {
  @Input() players: User[];
  @Input() games: Map<User, number>[];
  @Input() score: Object;

  leader(nickname: string) {
    let x: Boolean = false;
    this.score['players'].forEach(element => {
      if (element === nickname) {
        x = true;
      }
    });
    return x;
  }
}

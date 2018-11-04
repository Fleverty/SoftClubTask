import { Component } from '@angular/core';
import { UserService } from '../core/user-service';
import { User } from '../core/user-model';
import { USERS } from '../core/user-mocks';

@Component({
  selector: 'app-choose-game',
  templateUrl: './choose-game.component.html',
  styleUrls: ['./choose-game.component.css'],
})

export class ChooseGameComponent {
  constructor(private userService: UserService) {}

  game: number;
  style501: String = 'white';
  style301: String = 'white';
  listOfPlayers: User[] = [];
  findUser(nick: string) {
    this.listOfPlayers.push(this.userService.getUserByNick(nick));
  }
  deletePlayer(player: User) {
    this.listOfPlayers.splice(this.listOfPlayers.indexOf(player), 1);
  }
  chooseGame(game: number) {
    this.game = game;
    if (game === 501) {
      this.style501 = 'lightgreen';
      this.style301 = 'white';
    } else {
      this.style301 = 'lightgreen';
      this.style501 = 'white';
    }
  }
  startGame() {
    console.log(this.game);
    console.log(this.listOfPlayers);
  }
}

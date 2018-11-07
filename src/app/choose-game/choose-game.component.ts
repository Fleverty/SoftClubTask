import { Component } from '@angular/core';
import { UserService } from '../user/user-service';
import { User } from '../user/user-model';
import { Router } from '@angular/router';
import { Game501Service } from '../game-501/game-501.service';

@Component({
  selector: 'app-choose-game',
  templateUrl: './choose-game.component.html',
  styleUrls: ['./choose-game.component.css'],
})

export class ChooseGameComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private game501: Game501Service) {
      this.listOfPlayers.push(JSON.parse(localStorage.currentUser));
    }

  game: String;
  style501: String = 'white';
  style301: String = 'white';
  listOfPlayers: User[] = [];
  maxPlayers: Boolean = false;
  value: String = '';

  findUser(nick: string) {
    event.preventDefault();
    if (this.listOfPlayers.length === 5) {
      this.maxPlayers = true;
      return;
    }
    if (this.listOfPlayers.indexOf(this.userService.getUserByNick(nick)) >= 0) {
      return;
    }
    this.listOfPlayers.push(this.userService.getUserByNick(nick));
    document.querySelector('input.input-form')['value'] = '';
  }
  deletePlayer(player: User) {
    this.listOfPlayers.splice(this.listOfPlayers.indexOf(player), 1);
    this.maxPlayers = false;
  }
  chooseGame(game: string) {
    this.game = game;
    if (game === '501') {
      this.style501 = 'lightgreen';
      this.style301 = 'white';
    } else {
      this.style301 = 'lightgreen';
      this.style501 = 'white';
    }
  }
  startGame() {
    if (this.listOfPlayers.length > 0 && this.game !== '') {
      // this.game501.makeGame(this.listOfPlayers);
      localStorage.listOfPlayers = JSON.stringify(this.listOfPlayers);
      this.router.navigate([this.game]);
    } else {
      return;
    }
  }
}

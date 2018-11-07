import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from '../user/user-service';
import { ChooseGameComponent } from './choose-game.component';
import { LogoModule } from '../logo/logo.module';
import { Game501Service } from '../game-501/game-501.service';


@NgModule({
  declarations: [
    ChooseGameComponent,
  ],
  exports: [
    ChooseGameComponent,
  ],
  imports: [
    BrowserModule,
    LogoModule,
  ],
  providers: [UserService, Game501Service],
  bootstrap: [],
})

export class ChooseGameModule { }

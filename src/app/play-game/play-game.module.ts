import { NgModule } from '@angular/core';
import { PlayGameComponent } from './play-game.component';
import { BrowserModule } from '@angular/platform-browser';
import { Game501Service } from '../game-501/game-501.service';
import { LogoModule } from '../logo/logo.module';
import { DartsMoveModule } from '../darts-move/darts-move.module';
import { ListGameModule } from '../list-game/list-game.module';

@NgModule({
  declarations: [
    PlayGameComponent,
  ],
  exports: [
    PlayGameComponent,
  ],
  imports: [
    BrowserModule,
    LogoModule,
    DartsMoveModule,
    ListGameModule,
  ],
  providers: [Game501Service],
  bootstrap: [],
})

export class PlayGameModule {}

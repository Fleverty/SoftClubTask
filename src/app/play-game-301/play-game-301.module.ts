import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LogoModule } from '../logo/logo.module';
import { DartsMoveModule } from '../darts-move/darts-move.module';
import { ListGameModule } from '../list-game/list-game.module';
import { Game301Service } from '../game-301/game-301.service';
import { PlayGame301Component } from './play-game-301.component';

@NgModule({
  declarations: [
    PlayGame301Component,
  ],
  exports: [
    PlayGame301Component,
  ],
  imports: [
    BrowserModule,
    LogoModule,
    DartsMoveModule,
    ListGameModule,
  ],
  providers: [Game301Service],
  bootstrap: [],
})

export class PlayGame301Module {}

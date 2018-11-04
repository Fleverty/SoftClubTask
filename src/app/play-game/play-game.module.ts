import { NgModule } from '@angular/core';
import { PlayGameComponent } from './play-game.component';
import { BrowserModule } from '@angular/platform-browser';
import { Game501Service } from '../game-501/game-501.service';

@NgModule({
  declarations: [
    PlayGameComponent,
  ],
  exports: [
    PlayGameComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [Game501Service],
  bootstrap: [],
})

export class PlayGameModule {}

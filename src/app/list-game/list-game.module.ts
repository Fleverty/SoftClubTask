import { NgModule } from '@angular/core';
import { ListGameComponent } from './list-game.component';
import { BrowserModule } from '@angular/platform-browser';
import { Game501Service } from '../game-501/game-501.service';

@NgModule({
  declarations: [
    ListGameComponent,
  ],
  exports: [
    ListGameComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [Game501Service],
  bootstrap: [],
})

export class ListGameModule {}

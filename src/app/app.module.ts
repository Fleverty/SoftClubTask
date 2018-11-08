import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFormModule } from './create-form/create-form.module';
import { ChooseGameModule } from './choose-game/choose-game.module';
import { PlayGameModule } from './play-game/play-game.module';
import { PlayGame301Module } from './play-game-301/play-game-301.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreateFormModule,
    ChooseGameModule,
    PlayGameModule,
    PlayGame301Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

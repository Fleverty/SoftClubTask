import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFormModule } from './create-form/create-form.module';
import { ChooseGameModule } from './choose-game/choose-game.module';
import { PlayGameModule } from './play-game/play-game.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

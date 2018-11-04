import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from '../user/user-service';
import { ChooseGameComponent } from './choose-game.component';
import { LogoModule } from '../logo/logo.module';


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
  providers: [UserService],
  bootstrap: [],
})

export class ChooseGameModule { }

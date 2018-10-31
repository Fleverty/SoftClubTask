import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LogoComponent } from './logo.component';


@NgModule({
  declarations: [
    LogoComponent,
  ],
  exports: [
    LogoComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [],
})

export class LogoModule { }

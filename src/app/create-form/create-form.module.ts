import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CreateFormComponent } from './create-form.component';
import { LogoModule } from '../logo/logo.module';


@NgModule({
  declarations: [
    CreateFormComponent,
  ],
  exports: [
    CreateFormComponent,
  ],
  imports: [
    BrowserModule,
    LogoModule,
  ],
  providers: [],
  bootstrap: [],
})

export class CreateFormModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CreateFormComponent } from './create-form.component';


@NgModule({
  declarations: [
    CreateFormComponent,
  ],
  exports: [
    CreateFormComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [],
})

export class CreateFormModule { }

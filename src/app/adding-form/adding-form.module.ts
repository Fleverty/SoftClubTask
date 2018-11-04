import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AddingFormComponent } from './adding-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddingFormComponent,
  ],
  exports: [
    AddingFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [],
})

export class AddingFormModule { }

import { NgModule } from '@angular/core';
import { DartsMoveComponent } from './darts-move.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DartsMoveComponent,
  ],
  exports: [
    DartsMoveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [],
})

export class DartsMoveModule {}

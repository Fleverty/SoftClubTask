import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CreateFormComponent } from './create-form.component';
import { LogoModule } from '../logo/logo.module';
import { AddingFormModule } from '../adding-form/adding-form.module';
import { UserService } from '../core/user-service';


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
    AddingFormModule,
  ],
  providers: [UserService],
  bootstrap: [],
})

export class CreateFormModule { }

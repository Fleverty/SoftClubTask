import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFormModule } from './create-form/create-form.module';
// import { UserModule } from './core/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreateFormModule,
    // UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

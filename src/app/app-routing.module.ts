import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { ChooseGameComponent } from './choose-game/choose-game.component';
import { PlayGameComponent } from './play-game/play-game.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: CreateFormComponent,
  },
  {
    path: 'settings',
    component: ChooseGameComponent,
  },
  {
    path: '501',
    component: PlayGameComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

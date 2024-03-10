import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './features/games/games-list/games-list.component';
import { AddGameComponent } from './features/games/add-game/add-game.component';

const routes: Routes = [
  {
    path: 'games',
    component: GamesListComponent
  },
  {
    path: 'company/games/add',
    component: AddGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

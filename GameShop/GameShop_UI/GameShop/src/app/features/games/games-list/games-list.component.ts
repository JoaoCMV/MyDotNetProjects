import { Component, OnDestroy } from '@angular/core';
import { GetGameRequest } from '../models/get-game-request.model';
import { Subscription } from 'rxjs';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.css'
})
export class GamesListComponent implements OnDestroy {

  games: GetGameRequest[];
  private getGameSubscription?: Subscription;

  constructor(private gameService: GameService){
    this.games = [];
  }

  ngOnInit(): void{

    this.getGameSubscription = this.gameService.getGame()
    .subscribe({
      next: (response) => {
        this.games = response;
        for(let game of this.games){
          game.publishedDate = game.publishedDate.slice(0, 10);
        }

        console.log(this.games);
      },
      error: (error) => {
        console.log('ERROR - cannot get games');
      },
    });
  }

  ngOnDestroy(): void {
    this.getGameSubscription?.unsubscribe();
  }

}
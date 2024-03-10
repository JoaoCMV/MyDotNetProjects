import { Component, OnDestroy } from '@angular/core';
import { AddGameRequest } from '../models/add-game-request.model';
import { GameService } from '../services/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrl: './add-game.component.css'
})
export class AddGameComponent implements OnDestroy {

  model: AddGameRequest;
  private addGameSubscription?: Subscription;

  constructor(private gameService: GameService) {
    this.model = {
      name: '',
      description: '',
      category:'',
      author: '',
      authorUrl: ''
    };
  }

  onFormSubmit(){
    console.log(this.model);

    this.addGameSubscription = this.gameService.addGame(this.model)
    .subscribe({
      next: (response) => {
        console.log('Game added with success');
      },
      error: (error) => {
        console.log('ERROR - cannot add game');
      },
    });
  }

  ngOnDestroy(): void {
    this.addGameSubscription?.unsubscribe();
  }

}

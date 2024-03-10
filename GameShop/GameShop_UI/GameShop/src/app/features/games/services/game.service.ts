import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AddGameRequest } from '../models/add-game-request.model';
import { GetGameRequest } from '../models/get-game-request.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url: string; 

  constructor(private http: HttpClient) { 
    this.url = 'https://localhost:7079/api/games';
  }

  addGame(model: AddGameRequest): Observable<void>{

    return this.http.post<void>(this.url, model);
  }

  getGame(): Observable<GetGameRequest[]>{

    return this.http.get<GetGameRequest[]>(this.url);
  }
}

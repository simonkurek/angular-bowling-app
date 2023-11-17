import { Injectable } from '@angular/core';
import { PlayerEntry } from '../models/player-entry';
import { Observable, Subject } from 'rxjs';
import { Score } from '../models/score';
import { Point } from '../models/point';
import { Player } from '../models/player';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root',
})
export class BowlingService {
  private game: Game;
  private gameStatusSubject: Subject<boolean>;
  private gameStatus: Observable<boolean>;

  constructor() {
    this.game = new Game([]);
    this.gameStatusSubject = new Subject<boolean>();
    this.gameStatus = this.gameStatusSubject.asObservable();
  }

  save(playersEntries: PlayerEntry[]) {
    playersEntries.forEach((playerEntry) => {
      const score = playerEntry.scores.map((score) => {
        return new Point(score);
      });
      const player = new Player(playerEntry.name, new Score(score));
      this.game.addPlayer(player);
    });
    this.updateGameStatus();
  }

  getGame(): Game {
    return this.game;
  }

  getGameStatus(): Observable<boolean> {
    return this.gameStatus;
  }

  updateGameStatus() {
    this.gameStatusSubject.next(true);
  }
}

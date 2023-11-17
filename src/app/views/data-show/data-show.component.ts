import { Component } from '@angular/core';
import { BowlingService } from 'src/app/services/bowling.service';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.css'],
})
export class DataShowComponent {
  game: Game;
  roundIndexs: number[];

  constructor(private readonly bowlingService: BowlingService) {
    this.game = this.bowlingService.getGame();
    this.roundIndexs = Array.from(Array(this.game.rounds).keys());
  }
}

import { Component } from '@angular/core';
import { BowlingService } from './services/bowling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isDataProvided = false;
  constructor(private readonly bowlingService: BowlingService) {
    this.bowlingService.getGameStatus().subscribe((value) => {
      this.isDataProvided = value;
    });
  }
}

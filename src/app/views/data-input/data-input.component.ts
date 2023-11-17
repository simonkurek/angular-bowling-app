import { Component } from '@angular/core';
import { BowlingService } from 'src/app/services/bowling.service';
import { PlayerEntry } from 'src/app/models/player-entry';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css'],
})
export class DataInputComponent {
  constructor(private readonly bowlingService: BowlingService) {}

  async getDataFromEvent(event: Event) {
    const eventTarget = event.target as HTMLInputElement;
    const file = eventTarget.files?.item(0);
    return await file?.text();
  }

  formatToBowlingObjects(data: string) {
    const lines = data.split('\n').filter((line) => line.length > 0);
    const players: PlayerEntry[] = [];
    for (let i = 0; i < lines.length; i += 2) {
      const name = lines[i];
      const scores = lines[i + 1].split(', ').map((score) => parseInt(score));
      players.push({ name, scores });
    }
    return players;
  }

  async onFileSelected(event: Event) {
    const stringBowlingData = await this.getDataFromEvent(event);
    if (!stringBowlingData) return;
    const bowlingData = this.formatToBowlingObjects(stringBowlingData);
    this.bowlingService.save(bowlingData);
  }
}

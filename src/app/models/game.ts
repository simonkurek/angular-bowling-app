import { Player } from './player';

export class Game {
  players: Player[];
  rounds: number;

  constructor(players: Player[]) {
    this.players = players;
    this.rounds = 0;
  }

  addPlayer(player: Player) {
    this.players.push(player);
    this.calculateRounds();
  }

  calculateRounds() {
    this.rounds =
      this.players.length &&
      this.players
        .map((player) => player.score.getRoundsCount())
        .reduce((a, b) => Math.max(a, b));
  }
}

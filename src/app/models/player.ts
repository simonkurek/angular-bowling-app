import { Score } from './score';

export class Player {
  name: string;
  score: Score;

  constructor(name: string, score: Score) {
    this.name = name;
    this.score = score;
  }
}

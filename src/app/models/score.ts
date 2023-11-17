import { Point } from './point';

export class Score {
  private points: Point[];
  private totalScore: number;
  private roundsCount: number;

  constructor(points: Point[]) {
    this.points = points;
    this.roundsCount = this.points.length;
    this.totalScore = this.calculateTotalScore();
  }

  getPoints(): Point[] {
    return this.points;
  }

  getTotalScore(): number {
    return this.totalScore;
  }

  getRoundsCount(): number {
    return this.roundsCount;
  }

  private calculateTotalScore(): number {
    let sum = 0;
    let hasThrowInFrame = false;
    for (let i = 0; i < this.points.length; i++) {
      const pointValue = this.points[i].value;
      if (this.isStrike(pointValue, hasThrowInFrame)) {
        sum += this.getStrikePoints(i);
        continue;
      }
      if (this.isSpare(pointValue, i, hasThrowInFrame)) {
        sum += this.getSparePoints(i);
        hasThrowInFrame = false;
        continue;
      }
      hasThrowInFrame = !hasThrowInFrame;
      sum += this.points[i].value;
    }
    return sum;
  }

  isStrike(value: number, hasThrowInFrame: boolean): boolean {
    if (hasThrowInFrame) return false;
    return value === 10;
  }

  getStrikePoints(index: number): number {
    return (
      this.points[index].value +
      this.points[index + 1].value +
      this.points[index + 2].value
    );
  }

  isSpare(value: number, index: number, hasThrowInFrame: boolean): boolean {
    if (index === 0) return false;
    if (!hasThrowInFrame) return false;
    return value + this.points[index - 1].value === 10;
  }

  getSparePoints(index: number): number {
    return this.points[index].value + this.points[index + 1].value;
  }
}

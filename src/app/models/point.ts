export class Point {
  value: number;
  constructor(value: number) {
    if (value < 0 || value > 10) {
      throw new Error('Invalid point value');
    }
    this.value = value;
  }
}

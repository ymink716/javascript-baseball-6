import { Randoms } from '../../src/models/interface/Randoms';

export class MockRandoms implements Randoms {
  private num = 0;
  
  generate(start: number, end: number): number {
    this.num += 1;

    if (this.num > end) {
      this.num = start;
    }

    return this.num;
  }
}
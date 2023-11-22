import { Random } from '@woowacourse/mission-utils';

export class Randoms implements Randoms {
  generate(start: number, end: number): number {
    return Random.pickNumberInRange(start, end);
  }
}
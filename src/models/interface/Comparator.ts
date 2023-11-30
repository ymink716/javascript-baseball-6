import BaseballNumbers from "../vo/BaseballNumbers";

export interface Comparator {
  countStrike(guess: BaseballNumbers, answer: BaseballNumbers): number;
  countIncludedNumber(guess: BaseballNumbers, answer: BaseballNumbers): number;
}
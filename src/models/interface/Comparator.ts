import BaseballNumbers from "../vo/BaseballNumbers";

export interface Comparator {
  countStrikes(guess: BaseballNumbers, answer: BaseballNumbers): number;
  countIncludedNumbers(guess: BaseballNumbers, answer: BaseballNumbers): number;
}
class AnswerNumbers {
  private answerNumbers: number[];

  constructor(numbers: number[]) {
    this.answerNumbers = numbers;
  }

  getAnswerNumbers(): number[] {
    return this.answerNumbers;
  }
}

export default AnswerNumbers;
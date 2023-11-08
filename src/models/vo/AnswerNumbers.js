class AnswerNumbers {
  #answerNumbers;

  constructor(numbers) {
    this.#answerNumbers = numbers;
  }

  getAnswerNumbers() {
    return this.#answerNumbers;
  }
}

export default AnswerNumbers;
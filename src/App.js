import BaseballGameClient from './BaseballGameClient.js';

class App {
  constructor() {
    this.baseballGameClient = new BaseballGameClient();
  }
  
  async play() {
    await this.baseballGameClient.playBaseballGame();
  }
}

export default App;

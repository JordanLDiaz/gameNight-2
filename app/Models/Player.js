export class Player {
  constructor(name, score) {
    this.name = name;
    this.score = 0;
  }

  get PlayerTemplate() {
    return `
    <div class="col-8 card p-2 text-center">
    <div class="row justify-content-center">
      <h4>${this.name}: <span>${this.score}</span></h4>
      <button onclick="app.playersController.increaseScore('${this.name}')" class="btn btn-success w-25 mx-1">+</button>
      <button onclick="app.playersController.decreaseScore('${this.name}')"  class="btn btn-danger w-25 mx-1">-</button>
    </div>
  </div>
    `
  }
}
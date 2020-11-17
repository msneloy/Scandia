import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  firstNumber;
  secondNumber;
  result;
  constructor() {}
  add() {
    this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
  }
  sub() {
    this.result = parseInt(this.firstNumber) - parseInt(this.secondNumber);
  }

  mult() {
    this.result = parseInt(this.firstNumber) * parseInt(this.secondNumber);
  }

  div() {
    this.result = parseInt(this.firstNumber) / parseInt(this.secondNumber);
  }
}

import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  public gender: string;
  constructor() {}
  genderyHandler(event) {
    // get data throught event emitter
    this.gender = event.target.value;
  }
  leavegender(event) {
    console.log("bye bye ", event.target.value);
  }
  gogender(event) {
    console.log("hello ", event.target.value);
  }
}

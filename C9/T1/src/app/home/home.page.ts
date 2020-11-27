import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor() {}
  declare;
  public myimage =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/baa84d95-ebee-454a-ba52-b83a2c63dc48/dah0iea-9daeeb4c-8e08-417e-a4eb-04d700c8b600.png";
  addEvent() {
    if (
      this.myimage ==
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/baa84d95-ebee-454a-ba52-b83a2c63dc48/dah0iea-9daeeb4c-8e08-417e-a4eb-04d700c8b600.png"
    ) {
      this.myimage =
        "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/135472580/original/85f2dc6482cf87e8b68289e3f0b065cefee830f3/draw-chibi-of-your-choice.png";
    } else {
      this.myimage =
        "https://i.pinimg.com/originals/3a/0b/c9/3a0bc9274b8781d5d3423ade51fdaf6f.jpg";
    }
  }
}

import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(public alertCtrl: AlertController) {}
  async showPrompt() {
    const prompt = await this.alertCtrl.create({
      header: "User Login",

      inputs: [
        {
          name: "title",
          type: "text",
          placeholder: "Username",
        },
        {
          name: "title",
          type: "text",
          placeholder: "passsword",
        },
      ],
      buttons: [
        {
          text: "Login",
          handler: (data) => {
            console.log("Save clicked");
          },
        },
        {
          text: "Cancel",
          handler: (data) => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await prompt.present();
  }
}

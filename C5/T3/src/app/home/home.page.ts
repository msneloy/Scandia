import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(public alertCtrl: AlertController) {}

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: "Exit this APP?",
      message: "Are you sure?",
      buttons: [
        {
          text: "Yes",
          handler: () => {
            this.exitApp();
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
      ],
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
}

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
      header: "Sure to delete?",
      message: "Are you sure?",
      buttons: ["Delete", "Check for details", "Cancel"],
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
}

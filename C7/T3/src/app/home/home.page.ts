import { Component } from "@angular/core";
import { ToastController } from "@ionic/angular";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(public toastCtrl: ToastController) {}
  async openToast1() {
    const toast = await this.toastCtrl.create({
      message: "Toast message prompt box displayed for a long time",
      duration: 5000,
    });
    toast.present();
  }
  async openToast2() {
    const toast = await this.toastCtrl.create({
      message: "Toast message prompt box displayed for a short time",
      duration: 1000,
    });
    toast.present();
  }
}

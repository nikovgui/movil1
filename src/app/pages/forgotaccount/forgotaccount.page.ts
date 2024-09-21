import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgotaccount',
  templateUrl: './forgotaccount.page.html',
  styleUrls: ['./forgotaccount.page.scss'],
})
export class ForgotaccountPage {
  email: string = '';
  message: string = '';

  constructor(private alertController: AlertController) {}

  async sendResetEmail() {
    if (!this.email || !this.isValidEmail(this.email)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please enter a valid email address.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // Simular el envío de un correo de restablecimiento
    this.message = 'A reset link has been sent to your email address!';
  }

  isValidEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}

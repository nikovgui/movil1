import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {}

  async register() {
    if (this.email && this.password) {
      localStorage.setItem('user', JSON.stringify({ email: this.email, password: this.password }));
      const alert = await this.alertCtrl.create({
        header: 'Éxito',
        message: 'Usuario registrado con éxito.',
        buttons: ['OK']
      });
      await alert.present();
      this.navCtrl.navigateRoot('/login');
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}

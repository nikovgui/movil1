import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  address: string = ''; // Campo de dirección
  birthDate: string = ''; // Campo de fecha de nacimiento

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {}

  async register() {
    // Validar que todos los campos estén completos
    if (this.email && this.password && this.fullName && this.address && this.birthDate) {
      // Verificar que las contraseñas coincidan
      if (this.password !== this.confirmPassword) {
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: 'Las contraseñas no coinciden.',
          buttons: ['OK']
        });
        await alert.present();
      } else {
        // Guardar los datos del usuario en el localStorage
        const userData = {
          fullName: this.fullName,
          email: this.email,
          password: this.password,
          address: this.address,
          birthDate: this.birthDate
        };
        localStorage.setItem('user', JSON.stringify(userData));

        // Mostrar mensaje de éxito y redirigir al login
        const alert = await this.alertCtrl.create({
          header: 'Éxito',
          message: 'Usuario registrado con éxito.',
          buttons: ['OK']
        });
        await alert.present();

        // Redirigir al inicio de sesión después del registro
        this.navCtrl.navigateRoot('/login');
      }
    } else {
      // Mostrar alerta si faltan campos por completar
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}

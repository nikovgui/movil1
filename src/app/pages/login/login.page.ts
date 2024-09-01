import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
 
  
})
export class LoginPage {
  email: string = '';
  password: string = '';
  isDarkMode: boolean = false;

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {}

  toggleBackground() {
    this.isDarkMode = !this.isDarkMode;
    console.log('Modo activado:', this.isDarkMode);
  
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }


  async login() {
    const Usuariosaved = JSON.parse(localStorage.getItem('user') || '{}');
    if (this.email === Usuariosaved.email && this.password === Usuariosaved.password) {
      this.navCtrl.navigateRoot('/home');
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Email o contraseña incorrectos.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
  
}


  



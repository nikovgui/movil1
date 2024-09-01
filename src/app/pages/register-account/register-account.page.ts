import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.page.html',
  styleUrls: ['./register-account.page.scss'],
})
export class RegisterAccountPage  {

  email!: string;
  password!: string;

  constructor(private router: Router) {}

  onRegisterAccount() {
    // Navega a la página principal (HomePage) sin ninguna verificación
    this.router.navigate(['/home']);
  }

}

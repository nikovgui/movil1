import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage {
  email!: string;
  password!: string;

  constructor(private router: Router) {}

  onCreateAccount() {
   
    this.router.navigate(['/home']);
  }
}

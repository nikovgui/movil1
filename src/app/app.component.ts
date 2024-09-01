import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public showMenu = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkIfMenuShouldBeShown(event.url);
      }
    });
  }

  checkIfMenuShouldBeShown(url: string) {
    if (url === '/login' || url === '/register') {
      this.showMenu = false;
    } else {
      this.showMenu = true;
    }
  }

  @HostListener('document:ionMenuDidOpen', ['$event'])
  onMenuOpen() {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.classList.add('blur');
    }
  }

  @HostListener('document:ionMenuDidClose', ['$event'])
  onMenuClose() {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.classList.remove('blur');
    }
  }
}

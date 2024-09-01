import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  private openSections = new Set<string>();

  toggleSection(section: string) {
    if (this.openSections.has(section)) {
      this.openSections.delete(section);
    } else {
      this.openSections.add(section);
    }
  }

  isSectionOpen(section: string): boolean {
    return this.openSections.has(section);
  }


  constructor() { }

  toggleWifi(event: any) {
    console.log('Wi-Fi:', event.detail.checked);
  }
  toggleBluetooth(event: any) {
    console.log('Bluetooth:', event.detail.checked);
  }


  ngOnInit() {
  }

}

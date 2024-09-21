import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss'],
})
export class VideoModalComponent {
  @Input() videoSrc: string | undefined; // Recibe la URL del video

  constructor(private modalController: ModalController) {}

  closeModal() {
    this.modalController.dismiss();
  }
}
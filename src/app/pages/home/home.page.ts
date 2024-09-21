import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { VideoModalComponent } from '../video-modal/video-modal.component';
import { MediaService } from '../services/media.service'; // Importa el servicio

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  mediaItems: Array<{ src: string, type: string }> = [
    
  ];
  

  constructor(
    private modalController: ModalController,
    private mediaService: MediaService // Inyecta el servicio
  ) {}

  async ngOnInit() {
    this.mediaItems = this.mediaService.getMediaItems();  // Obtener la lista de medios
  }
  

  async openImageModal(imageSrc: string) {
    const modal = await this.modalController.create({
      component: ImageModalComponent,
      componentProps: { imageSrc },
      cssClass: 'transparent-modal',
      backdropDismiss: true,
    });
    return await modal.present();
  }

  async openVideoModal(videoSrc: string) {
    const modal = await this.modalController.create({
      component: VideoModalComponent,
      componentProps: { videoSrc },
      cssClass: 'transparent-modal',
      backdropDismiss: true,
    });
    return await modal.present();
  }

  descargarMedia(media: { src: string; type: string }) {
    const link = document.createElement('a');
    link.href = media.src;
    link.download = media.type === 'image' ? 'imagen_descargada.jpg' : 'video_descargado.mp4';
    link.click();
  }
  async uploadMedia(src: string, type: string) {
    const uploadedBy = 'User'; // Cambia esto por el nombre o ID del usuario si lo tienes
    const newMedia = { src, type, uploadedBy };
    await this.mediaService.addMediaItem(newMedia);  // Guardar el nuevo ítem
    this.mediaItems = this.mediaService.getMediaItems();  // Actualizar la lista en el front-end
  }
  
}

import { Component, Input } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent {

  @Input() imageSrc: string | undefined;
  liked: boolean = false; // Estado para controlar si se ha dado like
  showOptions: boolean = false;

  constructor(
    private modalController: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) {}

  closeModal() {
    this.modalController.dismiss();
  }

  toggleLike() {
    this.liked = !this.liked;
  }

  async presentOptions() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Descargar',
          icon: 'download',
          handler: () => {
            this.downloadImage();
          }
        },
        {
          text: 'Compartir',
          icon: 'share-social',
          handler: () => {
            this.shareImage();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close'
        }
      ]
    });

    await actionSheet.present();
  }

  downloadImage() {
    console.log('Descargando imagen...');
    // Lógica para descargar la imagen, puedes usar una librería o link
    if (this.imageSrc) {
      const link = document.createElement('a');
      link.href = this.imageSrc;
      link.download = 'imagen';
      link.click();
    }
  }

  shareImage() {
    console.log('Compartiendo imagen...');
    // Lógica para compartir la imagen, puedes integrar el Web Share API o algún plugin nativo
    if (navigator.share && this.imageSrc) {
      navigator.share({
        title: 'Imagen',
        text: 'Mira esta imagen increíble',
        url: this.imageSrc
      }).then(() => console.log('Imagen compartida correctamente'))
        .catch((error) => console.error('Error al compartir', error));
    } else {
      console.log('Web Share API no disponible');
    }
  }
}

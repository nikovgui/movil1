import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service'; // Importar el servicio MediaService

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  mediaItems: Array<{ src: string, type: string }> = [];

  constructor(private mediaService: MediaService) {}

  ngOnInit() {
    // Obtener los ítems cuando se carga la página
    this.loadMediaItems();
  }

  // Método para obtener los medios
  loadMediaItems() {
    this.mediaItems = this.mediaService.getMediaItems();
  }

  // Método para eliminar medios
  deleteMedia(media: { src: string, type: string }) {
    this.mediaService.deleteMediaItem(media); // Llama al método de eliminación
    this.loadMediaItems(); // Recargar la lista de medios
  }
}

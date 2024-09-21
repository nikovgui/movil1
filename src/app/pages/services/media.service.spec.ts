import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  // Añadimos 'uploadedBy' al tipo de mediaItems
  mediaItems: Array<{ src: string, type: string, uploadedBy: string }> = [];

  constructor(private storage: Storage) {
    this.init();
  }

  // Inicializar el almacenamiento
  async init() {
    await this.storage.create();
    this.loadMediaItems(); // Cargar los ítems almacenados al iniciar
  }

  // Método para agregar un nuevo medio
  async addMediaItem(media: { src: string, type: string, uploadedBy: string }) {
    this.mediaItems.unshift(media); // Agregar el nuevo ítem al inicio de la lista
    await this.storage.set('mediaItems', this.mediaItems); // Guardar en almacenamiento
  }

  // Método para obtener los medios almacenados
  async loadMediaItems() {
    const storedMediaItems = await this.storage.get('mediaItems');
    if (storedMediaItems) {
      this.mediaItems = storedMediaItems; // Cargar los medios almacenados si existen
    }
  }

  // Obtener los ítems de media
  getMediaItems() {
    return this.mediaItems; // Devolver la lista de medios almacenados
  }

  // Método para eliminar un medio
  async deleteMediaItem(media: { src: string, type: string, uploadedBy: string }) {
    this.mediaItems = this.mediaItems.filter(item => item !== media); // Filtrar el ítem eliminado
    await this.storage.set('mediaItems', this.mediaItems); // Actualizar el almacenamiento con la lista filtrada
  }
}

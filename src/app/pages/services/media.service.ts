import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private mediaItems: Array<{ src: string, type: string }> = [];

  constructor() {
    this.loadMediaItems(); // Cargar los medios almacenados al inicializar el servicio
  }

  // Obtener los elementos multimedia almacenados
  getMediaItems() {
    return this.mediaItems;
  }

  // Agregar un nuevo elemento multimedia a la lista
  addMediaItem(media: { src: string, type: string }) {
    this.mediaItems.push(media);
    this.saveMediaItems(); // Guardar la lista actualizada en el almacenamiento
  }

  // Eliminar un elemento multimedia de la lista
  deleteMediaItem(media: { src: string, type: string }) {
    this.mediaItems = this.mediaItems.filter(item => item !== media);
    this.saveMediaItems(); // Actualizar la lista en el almacenamiento
  }

  // Cargar elementos multimedia desde el almacenamiento
  loadMediaItems() {
    const storedMediaItems = localStorage.getItem('mediaItems');
    if (storedMediaItems) {
      this.mediaItems = JSON.parse(storedMediaItems);
    }
  }

  // Guardar elementos multimedia en el almacenamiento
  saveMediaItems() {
    localStorage.setItem('mediaItems', JSON.stringify(this.mediaItems));
  }
}

import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service'; // Importa el servicio MediaService


@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.page.html',
  styleUrls: ['./upload-photo.page.scss'],
})
export class UploadPhotoPage implements OnInit {
  selectedFile: File | null = null;

  constructor(
    private mediaService: MediaService // Inyecta el servicio MediaService
  ) {}

  ngOnInit() {}

  selectPhoto() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];  // Obtener el archivo seleccionado
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64Image = e.target.result;
  
        // Verificar si el archivo está convirtiéndose correctamente a base64
        console.log(base64Image);  // <-- Aquí se muestra el valor en la consola para comprobar
  
        // Agregar la foto al servicio MediaService
        this.mediaService.addMediaItem({ src: base64Image, type: 'image' });
      };
      reader.readAsDataURL(file);  // Convertir el archivo a base64
    }
  }
}

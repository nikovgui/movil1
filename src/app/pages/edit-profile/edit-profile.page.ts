import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Import NavController

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  nombre: string = '';
  nombreUsuario: string = '';
  address: string = '';
  birthDate: string = '';
  informacion: string = '';
  profilePic: string | ArrayBuffer | null = '';
  password: string = ''; // Contraseña actual
  newPassword: string = ''; // Nueva contraseña
  confirmNewPassword: string = ''; // Confirmación de la nueva contraseña
  showPassword: boolean = false; // Variable para mostrar/ocultar contraseña

  constructor(private navCtrl: NavController) {} // Inject NavController

  ngOnInit() {
    const storedUserData = localStorage.getItem('user');
    
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      this.nombre = userData.fullName.split(' ')[0];
      this.nombreUsuario = userData.email;
      this.address = userData.address;
      this.birthDate = userData.birthDate ? new Date(userData.birthDate).toISOString() : '';
      this.profilePic = userData.profilePic || ''; // Cargar la imagen si está guardada
      this.password = userData.password; // Cargar la contraseña actual
    }
  }

  triggerFileInput() {
    document.getElementById('fileInput')!.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePic = reader.result; // Mostrar la imagen seleccionada
      };
      reader.readAsDataURL(file);
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  saveProfile() {
    // Verificar que la nueva contraseña y la confirmación coincidan
    if (this.newPassword && this.newPassword !== this.confirmNewPassword) {
      alert('Las contraseñas nuevas no coinciden');
      return;
    }

    const updatedUserData = {
      fullName: `${this.nombre}`,
      email: this.nombreUsuario,
      address: this.address,
      birthDate: this.birthDate,
      informacion: this.informacion,
      profilePic: this.profilePic, // Guardar la imagen de perfil
      password: this.newPassword || this.password // Guardar la nueva contraseña o mantener la actual
    };

    localStorage.setItem('user', JSON.stringify(updatedUserData));

    // Redirigir a la página de perfil después de guardar
    this.navCtrl.navigateBack('/profile'); // Use NavController to navigate back
  }

  resetProfile() {
    this.ngOnInit();
  }
}

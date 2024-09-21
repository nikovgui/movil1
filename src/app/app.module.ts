import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { VideoModalComponent } from './pages/video-modal/video-modal.component';
import { ImageModalComponent } from './pages/image-modal/image-modal.component';

// Importar IonicStorageModule
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [
    AppComponent,
    ImageModalComponent,
    VideoModalComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    MatSlideToggleModule,
    IonicStorageModule.forRoot() // Inicializar el Storage
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  // Configuración del Storage para que sea inicializado de manera global
}

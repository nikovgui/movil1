import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadPhotoPageRoutingModule } from './upload-photo-routing.module';

import { UploadPhotoPage } from './upload-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadPhotoPageRoutingModule
  ],
  declarations: [UploadPhotoPage]
})
export class UploadPhotoPageModule {}

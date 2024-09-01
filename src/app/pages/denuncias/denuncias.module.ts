import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DenunciasPageRoutingModule } from './denuncias-routing.module';

import { DenunciasPage } from './denuncias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DenunciasPageRoutingModule
  ],
  declarations: [DenunciasPage]
})
export class DenunciasPageModule implements OnInit {
  denuncias: Array<{ titulo: string, descripcion: string }> = [];


  constructor() {}
  ngOnInit() {
    this.denuncias =[
      
    ]
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.page.html',
  styleUrls: ['./denuncias.page.scss'],
})
export class DenunciasPage implements OnInit {
  denuncias: Array<{ titulo: string, descripcion: string }> = [];


  constructor() { }

  ngOnInit() {
  }

}

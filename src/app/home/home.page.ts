import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  vidrioColores: { [key: string]: string } = {};

  constructor(private database:Database, ) {}

  ngOnInit() {
    const baseRoute = '/casa/';
    const cuartos = ['banio', 'bodega', 'cocina', 'dormitorio', 'dormitorio2', 'sala'];

    cuartos.forEach(cuarto => {
      const route = ref(this.database, baseRoute + cuarto);
      object(route).subscribe(attributes => {
        const valores_db = attributes.snapshot.val();
        this.vidrioColores[cuarto] = this.obtenerColorVidrio(valores_db);
      });
    });
  }
  
  obtenerColorVidrio(valores_db: any): string {
    if (valores_db && valores_db['casa'] === true) {
      return 'rgba(0, 255, 0, 0.5)';
    } else {
      return 'rgba(24, 209, 255, 0.5)';
    }
  }
}

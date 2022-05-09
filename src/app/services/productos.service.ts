import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: any = [];
  loading: boolean = true;
  
  constructor(private http: HttpClient) {
    this.loadProductos();
  }

  private loadProductos() {
    this.http.get('https://angular-portafolio-71333-default-rtdb.firebaseio.com/productos_idx.json').subscribe( (resp: ProductoInterface) => {
      this.loading = false;
      this.productos = resp;
      console.log(this.productos);
    });
  }
}

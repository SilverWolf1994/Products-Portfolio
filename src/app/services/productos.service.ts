import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading: boolean = true;
  productos: any = [];
  productoFiltrado: ProductoInterface[] = [];
  
  constructor(private http: HttpClient) {
    this.loadProductos();
    this.loadDataProductos(this.productos.id);
  }

  private loadProductos() {
    return new Promise( (resolve, reject) => {
      this.http.get('https://angular-portafolio-71333-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: ProductoInterface) => {
        this.loading = false;
        this.productos = resp;
        resolve;
      });
    });
  }

  private filtrarProductos(termino: string) {
    this.productoFiltrado = [];
    this.productos.forEach( (producto: any) => {
      if (producto.categoria.indexOf(termino.toLocaleLowerCase()) >= 0 || producto.titulo.toLocaleLowerCase().indexOf(termino) >= 0) {
        this.productoFiltrado.push(producto);
      }
    });
  }

  public loadDataProductos(id: string) {
    return this.http.get(`https://angular-portafolio-71333-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  public searchProducto(termino: string) {
    if (this.productos.length === 0) {
      this.loadProductos().then( () => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }
}

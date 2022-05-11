import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoData } from '../../interfaces/producto-data.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id?: string;
  producto?: ProductoData;

  constructor(private route: ActivatedRoute, public productosService: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productosService.loadDataProducto(params['id'])
      .subscribe( (resp: ProductoData) => {
        this.id = params['id'];
        this.producto = resp;
      });
    });
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPages } from '../interfaces/info-pages.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {

  info: InfoPages = {};
  loaded: boolean = false;

  constructor(private http: HttpClient) {
    console.log('Servicio de infoPages listo!');

    this.http.get('assets/data/data-pages.json').subscribe( (resp: InfoPages) => {
      this.loaded = true;
      this.info = resp;
      console.log(resp);
    });
  }
}

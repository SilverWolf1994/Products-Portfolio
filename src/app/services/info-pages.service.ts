import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPages } from '../interfaces/info-pages.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {

  info: InfoPages = {};
  loaded: boolean = false;
  team: any[] = [];

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
    console.log('Servicio de infoPages listo!');

    this.http.get('assets/data/data-pages.json').subscribe( (resp: InfoPages) => {
      this.loaded = true;
      this.info = resp;
    });
  }

  private loadTeam() {
    console.log('Servicio de Firebase listo!');

    this.http.get('https://angular-portafolio-71333-default-rtdb.firebaseio.com/equipo.json').subscribe( (resp: any) => {
      this.loaded = true;
      this.team = resp;
    });
  }
}

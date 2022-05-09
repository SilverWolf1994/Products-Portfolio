import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagesInterface } from '../interfaces/info-pages.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {

  info: InfoPagesInterface = {};
  loaded: boolean = false;
  team: any = [];

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
    this.http.get('assets/data/data-pages.json').subscribe( (resp: InfoPagesInterface) => {
      this.loaded = true;
      this.info = resp;
    });
  }

  private loadTeam() {
    this.http.get('https://angular-portafolio-71333-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: InfoPagesInterface) => {
      this.loaded = true;
      this.team = resp;
    });
  }
}

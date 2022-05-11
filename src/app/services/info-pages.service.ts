import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagesInterface } from '../interfaces/info-pages.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPagesService {

  info: InfoPagesInterface = {};
  loading: boolean = true;
  team: any = [];

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
    this.http.get('assets/data/data-pages.json').subscribe( (resp: InfoPagesInterface) => {
      this.info = resp;
    });
  }

  private loadTeam() {
    this.http.get('https://angular-portafolio-71333-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: InfoPagesInterface) => {
      this.team = resp;
      this.loading = false;
    });
  }
}

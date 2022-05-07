import { Component, OnInit } from '@angular/core';
import { InfoPagesService } from '../../services/info-pages.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year : number = new Date().getFullYear();
  
  constructor(public infoPagesService: InfoPagesService) { }

  ngOnInit(): void {
  }

}

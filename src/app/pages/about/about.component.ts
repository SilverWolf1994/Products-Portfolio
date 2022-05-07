import { Component, OnInit } from '@angular/core';
import { InfoPagesService } from '../../services/info-pages.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public infoPagesService: InfoPagesService) { }

  ngOnInit(): void {
  }

}

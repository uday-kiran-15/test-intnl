import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as translateData from '../../locale/constData';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data: any;
  language: string;

  constructor(private route: ActivatedRoute) {
    this.language = this.route.snapshot.paramMap.get('lang') || 'en';
   }

  ngOnInit() {
    const lang = this.route.snapshot.paramMap.get('lang') || 'en';
    this.data = translateData.default[lang];
    console.log(this.data,"data");
    
  }

}

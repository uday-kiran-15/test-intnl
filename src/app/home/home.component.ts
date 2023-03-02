import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';
import {Location} from '@angular/common';
import * as translateData from '../../locale/constData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  languages = [
    { lan: "Ducth", value: "de" },
    { lan: "English", value: "en" },
    { lan: "Spain", value: "sp" },
    { lan: "French", value: "fr" },
    { lan: "German", value: "ge" }
  ];
data: any;
  lang ="en";
@ViewChild('f', { static: true }) form:any;
  email!: string;
  password!: string;
  language = 'en';
  constructor(private route: ActivatedRoute, private router: Router, private location: Location) {
    this.language = this.route.snapshot.paramMap.get('lang') || 'en';
   }

  ngOnInit() {
    const lang = this.route.snapshot.paramMap.get('lang') || 'en';
    this.data = translateData.default[lang];
    console.log(this.data,"data");
    
  }

  onSubmit() {
    if(this.form.valid){
      this.form.reset();
    }

  }

  clearContent() {
    this.form.reset();
  }

  changeLanguage(event){
    this.language = event.target.value;
    this.data = translateData.default[this.language];
    console.log(this.router.url.split('/'))
    let endpoint = this.router.url.split('/')[2]
    console.log(this.location.go(this.language+'/'+endpoint));
    
    
  }
}

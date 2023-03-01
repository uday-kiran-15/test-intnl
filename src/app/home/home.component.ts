import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';
import * as translateData from '../../locale/constData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data: any;
  lang ="en";
@ViewChild('f', { static: true }) form:any;
  email!: string;
  password!: string;
  language = 'en';
  constructor(private route: ActivatedRoute) {
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
}

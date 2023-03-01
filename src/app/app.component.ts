import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, ParamMap } from '@angular/router';
import { from } from 'rxjs';
import { filter, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      const lang = this.route.snapshot.paramMap.get('lang') || 'en';
      console.log(lang,"lang");
      
      if (lang !== 'en' && lang !== 'fr' && lang !== 'ge' && lang !== 'de' && lang !== 'sp') {
        this.router.navigate(['/en/home']);
      }
    });

    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   const lang = params.get('lang');
    //   // Here you can update the content of the page based on the new language.
    //   from(import(`../locale/${lang}`)).pipe(pluck('default')).subscribe(eve => {
    //     console.log(eve,"eve");
    //     this.data = eve.form;
    //   })
    // }); 
  }
}

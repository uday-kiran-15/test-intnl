import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  
  // constructor() { }

  ngOnInit() {
  }
  items = [    { title: 'Item 1', content: 'Lorem ipsum dolor sit amet.' },    { title: 'Item 2', content: 'Consectetur adipiscing elit.' },    { title: 'Item 3', content: 'Praesent ac massa sed ex venenatis.' },    { title: 'Item 4', content: 'Vestibulum vel diam ac nisl consequat.' },    { title: 'Item 5', content: 'Maecenas molestie lacus vel nibh faucibus.' },    { title: 'Item 6', content: 'Nam id est id massa vestibulum porta.' },  ];
  mockdata = {
    "Name": "hello",
    "Email": "fssd",
    "Password": "sdsdsd",
    "Name1": "hello",
    "Email1": "fssd",
    "Password1": "sdsdsd",
    "Name2": "hello",
    "Email2": "fssd",
    "Password2": "sdsdsd",
    "Name3": "hello",
    "Email3": "fssd",
    "Password3": "sdsdsd",
    "Name4": "hello",
    "Email4": "fssd",
    "Password4": "sdsdsd"
  };

  formData = [];

  formDataValues = {};

  constructor() {
    for (const key in this.mockdata) {
      if (this.mockdata.hasOwnProperty(key)) {
        const element = this.mockdata[key];
        this.formData.push({
          key,
          type: 'text',
          name: this.mockdata[key]
        });
      }
    }
    console.log(this.formData,"formdat");
    
  }

  onSubmit() {
    console.log(this.formDataValues);
  }

}

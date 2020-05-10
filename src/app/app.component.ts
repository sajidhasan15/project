import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Application';
  forms = [
    {
    name: 'Sajid',
    description: "it's not a big deal"
  },
  {
    name: 'Hasan',
    description: 'it is two o clock'
  },
  {
    name: 'Minwhile',
    description: 'It is not too good'
  },
  {
    name: 'Kamal',
    description: 'It is preety good'
  },
  {
    name: 'Jahid',
    description: 'That is not fear'
  },
  ];

  addForm(newFormsName: any){
    var newForm = {
      name: newFormsName,
      description: 'sajid hasam',
    };
    this.forms.push(newForm);
  }

  deleteList(from: any){
    this.forms = this.forms.filter( t => t.name !== t.name);
  }
  
}

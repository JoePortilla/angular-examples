import {Component} from '@angular/core';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrl: './form-template-driven.component.css'
})
export class FormTemplateDrivenComponent {
  person = {
    name: '',
    age: ''
  }

  processForm() {
    // Aqui se debería buscar o almacenar la info del form. en una db
    console.log(this.person);
  }
}

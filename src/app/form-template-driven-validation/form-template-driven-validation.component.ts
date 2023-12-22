import {Component} from '@angular/core';

@Component({
  selector: 'app-form-template-driven-validation',
  templateUrl: './form-template-driven-validation.component.html',
  styleUrl: './form-template-driven-validation.component.css'
})
export class FormTemplateDrivenValidationComponent {
  person = {
    name: '',
    age: ''
  }

  processForm() {
    // Aqui se debería buscar o almacenar la info del form. en una db
    console.log(this.person);
  }
}

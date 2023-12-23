import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-reactive-validators',
  templateUrl: './form-reactive-validators.component.html',
  styleUrl: './form-reactive-validators.component.css'
})
export class FormReactiveValidatorsComponent {
  // Form Instance
  formUser = new FormGroup({
    // Inputs Instance
    'name': new FormControl('',
      [Validators.required]),
    'mail': new FormControl('',
      [Validators.required, Validators.email])
  });

  // Getters
  get name() {
    return this.formUser.get('name') as FormControl;
  }

  get mail() {
    return this.formUser.get('mail') as FormControl;
  }

  processForm() {
    // Aqui se debería buscar o almacenar la info del form. en una db
    console.log(this.formUser.value);
  }
}

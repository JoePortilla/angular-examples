import {Component} from '@angular/core';

@Component({
  selector: 'app-class-binding-direct-txt-color',
  templateUrl: './class-binding-direct-txt-color.component.html',
  styleUrl: './class-binding-direct-txt-color.component.css'
})
export class ClassBindingDirectTxtColorComponent {
  text_color: string = '';
  button_disabled: boolean = false;
}

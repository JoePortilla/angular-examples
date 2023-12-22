import {Component} from '@angular/core';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrl: './template-variable.component.css'
})
export class TemplateVariableComponent {
  showAlert(msg: string) {
    alert('Hello ' + msg);
  }
}

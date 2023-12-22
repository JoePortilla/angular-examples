import {Component} from '@angular/core';

@Component({
  selector: 'app-interpolation-object',
  templateUrl: './interpolation-object.component.html',
  styleUrl: './interpolation-object.component.css'
})
export class InterpolationObjectComponent {
  person = {
    name: 'Joe',
    lastname: 'Portilla'
  }
}

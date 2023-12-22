import {Component} from '@angular/core';
import {Person} from "../person";

@Component({
  selector: 'app-interpolation-interface',
  templateUrl: './interpolation-interface.component.html',
  styleUrl: './interpolation-interface.component.css'
})
export class InterpolationInterfaceComponent {
  person: Person = {
    name: 'Joe',
    lastname: 'Portilla',
  }
}

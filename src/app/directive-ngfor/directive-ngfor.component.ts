import {Component} from '@angular/core';
import {Person} from "../person";

@Component({
  selector: 'app-directive-ngfor',
  templateUrl: './directive-ngfor.component.html',
  styleUrl: './directive-ngfor.component.css'
})
export class DirectiveNgforComponent {
  array: Person[] = [
    {name: 'Joe', lastname: 'Portilla'},
    {name: 'Guillermo', lastname: 'Portilla'},
    {name: 'Marcial', lastname: 'Portilla'},
  ];
}

import {Component} from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrl: './father.component.css'
})
export class FatherComponent {
  parentData = "Parent Data";
  parentFormInput: string = '';
}

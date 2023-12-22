import {Component} from '@angular/core';

@Component({
  selector: 'app-property-binding-btn-disabled',
  templateUrl: './property-binding-btn-disabled.component.html',
  styleUrl: './property-binding-btn-disabled.component.css'
})
export class PropertyBindingBtnDisabledComponent {
  button_disabled: boolean = false;
}

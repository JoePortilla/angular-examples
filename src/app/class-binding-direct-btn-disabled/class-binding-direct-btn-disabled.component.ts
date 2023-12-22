import {Component} from '@angular/core';

@Component({
  selector: 'app-class-binding-direct-btn-disabled',
  templateUrl: './class-binding-direct-btn-disabled.component.html',
  styleUrl: './class-binding-direct-btn-disabled.component.css'
})
export class ClassBindingDirectBtnDisabledComponent {
  button_disabled: boolean = false;
}

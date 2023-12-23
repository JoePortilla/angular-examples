import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  // Input allows to receive inherited information
  @Input() inheritedData?: string;
  @Input() inheritedForm?: string;
}

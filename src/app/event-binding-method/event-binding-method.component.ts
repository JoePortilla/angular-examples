import {Component} from '@angular/core';

@Component({
  selector: 'app-event-binding-method',
  templateUrl: './event-binding-method.component.html',
  styleUrl: './event-binding-method.component.css'
})
export class EventBindingMethodComponent {
  num: number = 0;

  subtract() {
    this.num--;
  }

  add() {
    this.num++;
  }
}

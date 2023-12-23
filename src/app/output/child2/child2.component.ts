import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  childData = '';
  // Custom event
  @Output() textFormChange = new EventEmitter<string>();

  emitTextChange() {
    // Each time a key is pressed -> the event is triggered -> send the parameter <childText>
    this.textFormChange.emit(this.childData);
  }
}

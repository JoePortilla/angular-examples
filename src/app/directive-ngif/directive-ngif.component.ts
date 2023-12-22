import {Component} from '@angular/core';

@Component({
  selector: 'app-directive-ngif',
  templateUrl: './directive-ngif.component.html',
  styleUrl: './directive-ngif.component.css'
})
export class DirectiveNgifComponent {
  openNotification: boolean = false;

  showAlert(msg: string) {
    alert('Hello ' + msg);
    this.openNotification = true;
  }
}

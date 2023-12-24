import {Component} from '@angular/core';
import {MessagesService} from "../messages.service";

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrl: './add-messages.component.css'
})
export class AddMessagesComponent {
  constructor(public msgService: MessagesService) {
  }

  message: string = '';

  addMessage() {
    this.msgService.add(this.message);
    // Reset box text
    this.message = '';
  }
}

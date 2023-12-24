import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messagesArray: string[] = [];

  add(message: string) {
    this.messagesArray.push(message);
  }
}

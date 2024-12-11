import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket$: WebSocketSubject<string>;

  constructor() {
    this.socket$ = webSocket('ws://localhost:8080/logs');
  }

  getLogs() {
    return this.socket$; // Returns the WebSocketSubject for log updates
  }
}


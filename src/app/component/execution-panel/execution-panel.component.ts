import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {WebsocketService} from '../../service/web-socket-service/websocket-service.service';

@Component({
  selector: 'app-execution-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './execution-panel.component.html',
  styleUrls: ['./execution-panel.component.css']
})
export class ExecutionPanelComponent {
  logs: string[] = [];

  constructor(private http: HttpClient,private webSocketService: WebsocketService) {}

  ngOnInit() {
    this.webSocketService.getLogs().subscribe(
      (log: string) => this.addLog(log),
      (error) => this.addLog(`WebSocket error: ${error}`),
      () => this.addLog('WebSocket connection closed')
    );
  }

  startExecution() {
    this.http.post('/api/execution', true, { headers: { 'Content-Type': 'application/json' } }).subscribe(
      () => this.addLog('Execution started successfully'),
      (error) => this.addLog(`Error starting execution: ${error.message}`)
    );
  }

  stopExecution() {
    this.http.post('/api/execution', false, { headers: { 'Content-Type': 'application/json' } }).subscribe(
      () => this.addLog('Execution stopped successfully'),
      (error) => this.addLog(`Error stopping execution: ${error.message}`)
    );
  }
  addLog(message: string) {
    this.logs.push(message);
  }

}

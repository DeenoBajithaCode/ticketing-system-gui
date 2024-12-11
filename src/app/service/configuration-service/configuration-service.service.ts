import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Configuration} from '../../model/configuration';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private apiUrl = 'http://localhost:8080/api/config/add';

  constructor(private http: HttpClient) {}

  addConfiguration(config: Configuration): Observable<string> {
    return this.http.post(this.apiUrl, config, { responseType: 'text' });
  }

}


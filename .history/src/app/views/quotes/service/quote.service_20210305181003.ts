import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  baseApiUrl = environment.apiUrl + 'Quote/';

  constructor(private http: HttpClient) {}

  create(quote) {
    return this.http.post(this.baseApiUrl, quote);
  }
  getById(id): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + 'getById/' +  id);
  }
  
  update( quote) {
    return this.http.put(this.baseApiUrl,   update( quote) {
      );
  }
}

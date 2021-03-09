import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  baseApiUrl = environment.apiUrl + 'Quote/';

  constructor(private http: HttpClient) {}

  create(quote) {
    return this.http.post(this.baseApiUrl, quote);
  }

}

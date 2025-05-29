import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

  constructor(private http: HttpClient) {}

  getMarketData(): Observable<any> {
    return this.http.get(this.apiURL);
  }
}

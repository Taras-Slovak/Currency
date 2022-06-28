import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currency } from '../models/currency.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private apiUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json?valcode=EUR&date=20211226';

  constructor(private http: HttpClient) { }

  getCurrency(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.apiUrl)
  }
}

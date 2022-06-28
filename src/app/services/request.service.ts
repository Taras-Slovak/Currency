import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currencies } from '../models/currency.model';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RequestService {


  private apiUrl = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json&date=${formatDate(new Date(), 'yyyyMMdd', 'en')}`;

  constructor(private http: HttpClient) { }



  getCurrency(): Observable<Currencies[]> {
    return this.http.get<Currencies[]>(this.apiUrl)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v2';
  private byNameEndpoint: string = 'name';
  private byCapitalEndpoint: string = 'capital';
  private countryCodeEndpoint: string = 'alpha';
  private regionEndpoint: string = 'region';
  private queryParams: HttpParams = new HttpParams()
    .set('fields', 'name,capital,alpha2Code,flags,population');

  constructor(private http: HttpClient) { }

  requestCountries(value: string): Observable<Country[]> {
    const url = `${this.apiUrl}/${this.byNameEndpoint}/${value}`;
    return this.http.get<Country[]>(url, { params: this.queryParams })
      .pipe(
        tap(console.log)
      );
  }

  requestCapitals(value: string): Observable<Country[]> {
    const url = `${this.apiUrl}/${this.byCapitalEndpoint}/${value}`;
    return this.http.get<Country[]>(url, { params: this.queryParams })
      .pipe(
        tap(console.log)
      );
  }

  requestCountryByCode(id: string): Observable<Country> {
    const url = `${this.apiUrl}/${this.countryCodeEndpoint}/${id}`;
    return this.http.get<Country>(url);
  }

  requestRegions(value: string): Observable<Country[]> {
    const url = `${this.apiUrl}/${this.regionEndpoint}/${value}`;
    return this.http.get<Country[]>(url, { params: this.queryParams })
      .pipe(
        tap(console.log)
      );
  }
}

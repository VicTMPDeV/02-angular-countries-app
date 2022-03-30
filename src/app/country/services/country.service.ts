import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl:string = 'https://restcountries.com/v2';
  private byNameEndpoint: string = 'name';
  private byCapitalEndpoint: string = 'capital';

  constructor( private http: HttpClient ) { }

  requestCountry( value:string ): Observable<Country[]>{
    const url = `${this.apiUrl}/${this.byNameEndpoint}/${value}`;
    return this.http.get<Country[]>(url);
  }

  requestCapital( value:string ): Observable<Country[]>{
    const url = `${this.apiUrl}/${this.byCapitalEndpoint}/${value}`;
    return this.http.get<Country[]>(url);
  }
}

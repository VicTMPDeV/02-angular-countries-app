import { Component, Input } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: []
})
export class CountryComponent {

  public searchValue: string = '';
  public hasError: boolean = false;
  public countriesList: Country[] = [];

  constructor(private countryServiceInstance: CountryService) { }

  public findByName(value:string){
    this.hasError = false;
    this.searchValue = value;
    this.countryServiceInstance.requestCountries(this.searchValue)
      .subscribe({
        next: (apiResponse) => {
          this.countriesList = apiResponse;
        },
        error: (err) => {
          this.hasError = true;
          this.countriesList = []; //purge list to 0 size to use this condition at *NgIf
        }
      });
  }

  public suggestions(wordSeek:string){
    this.hasError = false;
  }

}

import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: []
})
export class CountryComponent {

  public searchWord: string = '';
  public hasError: boolean = false;
  public countriesList: Country[] = [];

  constructor(private countryServiceInstance: CountryService) { }

  searchFromAPI(wordSeek:string){
    this.hasError = false;
    this.searchWord = wordSeek;
    this.countryServiceInstance.searchCountry(this.searchWord)
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

}

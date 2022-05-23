import { Component, Input } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class CountryComponent {

  public searchValue: string = '';
  public hasError: boolean = false;
  public countriesList: Country[] = [];
  public suggestedList: Country[] = [];
  public showSuggestion: boolean = false;

  constructor(private countryServiceInstance: CountryService) { }

  public findByName(value:string){
    this.showSuggestion = false;
    this.hasError = false;
    this.searchValue = value;

    this.countryServiceInstance.requestCountries(this.searchValue)
      .subscribe({ //VERY IMPORTANT POINT
        next: (apiResponse) => {
          this.countriesList = apiResponse;
        },
        error: (err) => {
          this.hasError = true;
          this.countriesList = []; //purge list to 0 size to use this condition at *NgIf
        }
      });
  }

  public suggestions(value:string){
    this.hasError = false;
    this.searchValue = value;
    this.showSuggestion = true;
    
    this.countryServiceInstance.requestCountries(this.searchValue)
      .subscribe({ 
        next: (countries) => {
          this.suggestedList = countries.splice(0,5);
        },
        error: (err) => {
          this.hasError = true;
          this.suggestedList = []
        }
      });
  }

}

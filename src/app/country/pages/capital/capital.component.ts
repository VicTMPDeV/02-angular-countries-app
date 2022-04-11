import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class CapitalComponent {

  public searchValue: string = '';
  public hasError: boolean = false;
  public capitalsList: Country[] = [];
  public suggestedList: Country[] = [];
  public showSuggestion: boolean = false;

  constructor(private countryServiceInstance: CountryService) { }

  public findByCapital(value:string){
    this.showSuggestion = false;
    this.hasError = false;
    this.searchValue = value;

    this.countryServiceInstance.requestCapitals(this.searchValue)
      .subscribe({
        next: (apiResponse) => {
          this.capitalsList = apiResponse;
        }, 
        error: (err) => {
          this.hasError = true;
          this.capitalsList = []; //purge list to 0 size to use this condition at *NgIf
        }
      });
  }

  public suggestions(value:string){
    this.hasError = false;
    this.searchValue = value;
    this.showSuggestion = true;
    
    this.countryServiceInstance.requestCapitals(this.searchValue)
      .subscribe({ 
        next: (capitals) => {
          this.suggestedList = capitals.splice(0,5);
        },
        error: (err) => {
          this.hasError = true;
          this.suggestedList = []
        }
      });
  }

}


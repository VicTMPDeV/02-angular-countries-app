import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: []
})
export class CapitalComponent {

  public searchValue: string = '';
  public hasError: boolean = false;
  public capitalsList: Country[] = [];

  constructor(private countryServiceInstance: CountryService) { }

  public findByCapital(value:string){
    this.hasError = false;
    this.searchValue = value;
    this.countryServiceInstance.requestCapital(this.searchValue)
      .subscribe({
        next: (apiResponse) => {
          this.capitalsList = apiResponse;
        }, 
        error: (err) => {
          this.hasError = true;
          this.capitalsList = [];
        }
      });
  }

}


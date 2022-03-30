import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styles: [
  ]
})
export class CountryDetailComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute,
    private countryServiceInstance: CountryService 
    ) { }

  ngOnInit( ): void {
    this.activatedRoute.params
      .subscribe( ({ id })  => {
        // console.log(id);
        this.countryServiceInstance.requestCountryByCode(id)
          .subscribe( country => {
            console.log(country);
          });
      });
  }

}

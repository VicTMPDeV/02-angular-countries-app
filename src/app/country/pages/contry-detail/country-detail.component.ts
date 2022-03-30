import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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
    //With RxJs switchMap operator
    this.activatedRoute.params
      .pipe(
          switchMap(({id}) => this.countryServiceInstance.requestCountryByCode( id ))
      )
      .subscribe( resp => {
        console.log(resp);
      });

    //Without RxJs operators 
    // this.activatedRoute.params
    //   .subscribe( ({ id })  => {
    //     // console.log(id);
    //     this.countryServiceInstance.requestCountryByCode(id)
    //       .subscribe( country => {
    //         console.log(country);
    //       });
    //   });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styles: [
  ]
})
export class CountryDetailComponent implements OnInit {

  public country!: Country; //(!) operator lets country be null, otherwhise an error is reported
  
  constructor( 
    private activatedRoute: ActivatedRoute,
    private countryServiceInstance: CountryService 
    ) { }

  ngOnInit( ): void {
    //With RxJs switchMap operator
    this.activatedRoute.params
      .pipe(
          switchMap( ({ id }) => this.countryServiceInstance.requestCountryByCode( id )),
          tap(console.log) //tap receives observable previous product and then does something with it
          //tap( resp => console.log(resp) )  //this is the classic sintax
      )
      .subscribe( country => this.country = country );

    //Without RxJs operators 
    //------------------------------------------------------------
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

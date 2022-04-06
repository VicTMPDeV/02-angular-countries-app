import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    `button {
        margin-right: 10px;
    }`
  ]
})
export class RegionComponent {

  public regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public activeRegion: string = '';
  public countriesList: Country[] = [];

  constructor( private countryServiceInstance:CountryService ) { }

  public setCssClass(region: string): string {
    console.log('PREGUNTAR A EFI');//TODO
    return (region === this.activeRegion)?'btn btn-primary':'btn btn-outline-primary';
  }

  public setActiveRegion(region: string) {
    //avoid refresh when clic on the same button
    if( region !== this.activeRegion ){
      return;
    }
    this.activeRegion = region;
    //purge countries list to improve response
    this.countriesList = [];
    this.countryServiceInstance.requestRegions(region)
      .subscribe(countries => this.countriesList = countries);
  }

}

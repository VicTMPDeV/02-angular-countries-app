import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { CountryDetailComponent } from './pages/contry-detail/country-detail.component';

@NgModule({
  declarations: [
    RegionComponent,
    CountryComponent,
    CapitalComponent,
    CountryDetailComponent
  ],
  exports: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    CountryDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }

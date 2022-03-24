import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './pages/by-capital/por-capital.component';
import { PorPaisComponent } from './pages/by-country/por-pais.component';
import { PorRegionComponent } from './pages/by-region/por-region.component';
import { VerPaisComponent } from './pages/contry-detail/ver-pais.component';

@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaisModule { }

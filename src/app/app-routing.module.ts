import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountryComponent } from './country/pages/country/country.component';
import { RegionComponent } from './country/pages/region/region.component';
import { CapitalComponent } from './country/pages/capital/capital.component';
import { CountryDetailComponent } from './country/pages/contry-detail/country-detail.component';

const routes: Routes = [
    {
        path:'',
        component: CountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: RegionComponent
    },
    {
        path: 'capital',
        component: CapitalComponent
    },
    {
        path: 'country/:id', //:id is the param for the ActivatedRoute 
        component: CountryDetailComponent
    },
    {
        path:'**',
        redirectTo: ''  //also can use activated error 404
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './country/pages/by-country/por-pais.component';
import { PorRegionComponent } from './country/pages/by-region/por-region.component';
import { PorCapitalComponent } from './country/pages/by-capital/por-capital.component';
import { VerPaisComponent } from './country/pages/contry-detail/ver-pais.component';

const routes: Routes = [
    {
        path:'',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path:'**',
        redirectTo: ''  //tambien se puede usar un componente de error 404
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
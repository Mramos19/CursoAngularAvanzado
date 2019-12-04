import { Routes, RouterModule } from "@angular/router";

import { CatalogComponent } from './catalog.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes =[
{
    path: 'Catalog', component: CatalogComponent, children:[
        {
            path: 'Progress', component: ProgressComponent          
        },
        {
            path: '', redirectTo: 'Progress', pathMatch: 'full'
        }        
    ]
}
]

export const CatalogRoutingModule = RouterModule.forChild(routes);
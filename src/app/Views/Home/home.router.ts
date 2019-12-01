import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { HomeComponent } from './home.component';


const routes: Routes=[
    {
        path: 'Home', component: HomeComponent, children:[
            {
                path: 'Default', component: DefaultComponent                
            },
            { 
                path: '', redirectTo: 'Default', pathMatch:'full' 
            }
        ]
    }
]

export const HomeRoutingModule = RouterModule.forChild(routes);
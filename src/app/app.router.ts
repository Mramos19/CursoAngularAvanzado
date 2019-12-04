import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Views/Account/login/login.component';
import { NotFoundComponent } from './Views/Template/not-found/not-found.component';

const routes: Routes = [
    {
        path: 'Account/Login', component: LoginComponent
    },
    {
        path: 'NotFound', component:NotFoundComponent
    },
    {
        path: '', redirectTo: 'Home', pathMatch: 'full'
    },
    {                
        path: '**', redirectTo: 'NotFound', pathMatch: 'full'
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
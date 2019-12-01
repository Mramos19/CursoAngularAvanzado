import { NgModule } from "@angular/core";

import { HomeComponent } from './home.component';
import { DefaultComponent } from './default/default.component';

import { HomeRoutingModule } from './home.router';
import { SharedModule } from '../Shared/shared.module';


@NgModule({
    declarations: [
        HomeComponent,
        DefaultComponent
    ],
    imports: [               
        SharedModule,
        HomeRoutingModule,
    ],
    exports: [
        HomeComponent            
    ]
})

export class HomeModule { }
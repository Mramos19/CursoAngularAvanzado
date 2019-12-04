import { NgModule } from "@angular/core";

import { CatalogComponent } from './catalog.component';
import { ProgressComponent } from './progress/progress.component';

import { CatalogRoutingModule } from './catalog.routes';
import { SharedModule } from '../Shared/shared.module';


@NgModule({

    declarations:[
        CatalogComponent,
        ProgressComponent
    ],
    imports:[
        SharedModule,
        CatalogRoutingModule
    ],
    exports:[
        CatalogComponent
    ],

})

export class CatalogModule{}
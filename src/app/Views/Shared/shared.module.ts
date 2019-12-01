import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        NavbarComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        FooterComponent
    ],
    exports: [
        NavbarComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        FooterComponent
    ]
})

export class SharedModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Modules
import { HomeModule } from './Views/Home/home.module';
import { CatalogModule } from './Views/Catalog/catalog.module';

//Configuracion rutas
import { AppRoutingModule } from './app.router';

//Componentes
import { LoginComponent } from './Views/Account/login/login.component';
import { NotFoundComponent } from './Views/Template/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    CatalogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeModule } from './Views/Home/home.module';

//Configuracion rutas
import { AppRoutingModule } from './app.router';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { Page404Component } from './componentes/page404/page404.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/user/login/login.component';
import { RegisterComponent } from './componentes/user/register/register.component';
import { CreateAdComponent } from './componentes/create-ad/create-ad.component';
import { PeriodComponent } from './componentes/period/period.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Page404Component,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CreateAdComponent,
    PeriodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

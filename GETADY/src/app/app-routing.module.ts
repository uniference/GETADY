import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/user/login/login.component';
import { Page404Component } from './componentes/page404/page404.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegisterComponent } from './componentes/user/register/register.component';
import { CreateAdComponent } from './componentes/create-ad/create-ad.component';
import { PeriodComponent } from './componentes/period/period.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "user/login", component: LoginComponent },
  { path: "user/register", component: RegisterComponent },
  { path: "create-ad", component: CreateAdComponent },
  { path: "period", component: PeriodComponent },
  { path: "**", component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

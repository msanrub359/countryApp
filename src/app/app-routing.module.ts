import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  // {path:'', component: HomePageComponent},
  {path:'about', component: AboutPageComponent},
  {path:'contact', component: ContactPageComponent},
  {path:'countries',
  loadChildren: ()=>import ('./countries/services/countries.module').then ( m=>m.CountriesModule)},
  {path:'**', redirectTo: 'countries'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

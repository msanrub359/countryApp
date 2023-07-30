import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
    'img{width:250px}'
  ]
})
export class CountryPageComponent implements OnInit {

  public country?:Country;

  constructor(private activedRoute:ActivatedRoute,
    private CountriesService:CountriesService,
    private router:Router){}

  ngOnInit(): void {
    this.activedRoute.params
    .pipe(
      switchMap(({id})=>this.CountriesService.searchCountryByAlphaCode(id)),
    ).subscribe(country=>{
      if (!country){
        return this.router.navigateByUrl('')
      }else{
        return this.country=country;

      }

    }
    )
  }
}

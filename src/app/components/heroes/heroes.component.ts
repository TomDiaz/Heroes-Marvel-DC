import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
  
})
export class HeroesComponent implements OnInit {

   heroes:Heroe[] = [];
   static _heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService, 
              private router:Router
    ) {

      this.heroes =  HeroesComponent._heroes;
    }

  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

 


  verHeroe(idx:number){
      this.router.navigate(['/heroe',idx]);
  }

}

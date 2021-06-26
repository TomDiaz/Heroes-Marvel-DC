import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { HeroesService } from '../../servicios/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent  {

  heroe:any = {};
  casa: string;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService
    ) { 
      
      this.activatedRoute.params.subscribe(parametro => {
          this.heroe = this._heroesService.getHeroe(parametro['id']);
          
          if (this.heroe.casa == 'DC'){
            this.casa = "assets/img/dc.jpg";
           }
           else{
            this.casa = "assets/img/marvel.jpg";
           }
      })
  }

  

}

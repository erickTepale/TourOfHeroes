import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { 
  
  }

  ngOnInit() {
    this.getHeroes();
  }

  /**
   * The new version waits for the Observable to emit the 
   * array of heroes— which could happen now or several 
   * minutes from now. Then subscribe passes the emitted 
   * array to the callback, which sets the component's 
   * heroes property.
   */
  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
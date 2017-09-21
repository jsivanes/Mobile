import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {  }
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}

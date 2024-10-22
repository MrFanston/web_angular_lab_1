import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import {NgForOf} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

  goToHeroDetail(id: number) {
    this.router.navigate(['/hero', id]);  // Переход на детальную страницу героя
  }
}

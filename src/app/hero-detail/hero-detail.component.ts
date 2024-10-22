import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit {
  hero: any;

  constructor(private route: ActivatedRoute, private heroService: HeroService) {}

  ngOnInit() {
    const heroId = +this.route.snapshot.paramMap.get('id')!;
    this.hero = this.heroService.getHeroById(heroId);
  }
}

import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },  // Перенаправление на страницу героев
  { path: 'heroes', component: HeroesComponent },           // Маршрут для компонента героев
  { path: 'hero/:id', component: HeroDetailComponent }     // Маршрут для детальной страницы героя
];

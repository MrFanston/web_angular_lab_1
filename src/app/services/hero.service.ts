import { Injectable } from '@angular/core';

interface Hero {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes: Hero[] = [
    {
      id: 1, name: 'Юрий Гагарин',
      description: 'Первый человек в космосе.',
      fullDescription: 'Юрий Гагарин стал первым человеком, совершившим полет в космос 12 апреля 1961 года.'
    },
    {
      id: 2, name: 'Александр Покрышкин',
      description: 'Трижды Герой Советского Союза.',
      fullDescription: 'Александр Покрышкин был советским летчиком-асом, трижды Героем Советского Союза.'
    },
    {
      id: 3, name: 'Зоя Космодемьянская',
      description: 'Героиня Великой Отечественной войны.',
      fullDescription: 'Зоя Космодемьянская была участницей партизанского движения во время Великой Отечественной войны.'
    }
  ];

  getHeroes() {
    return this.heroes;
  }

  getHeroById(id: number) {
    return this.heroes.find(hero => hero.id === id);
  }
}

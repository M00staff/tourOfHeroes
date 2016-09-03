import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService {
  // NG2 Promise?
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}

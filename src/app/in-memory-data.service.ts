import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const heroes = [
      { id: 11, name: 'Chaves' },
      { id: 12, name: 'Chiquinha' },
      { id: 13, name: 'Sr.º Madruga' },
      { id: 14, name: 'D.ª Clotilde' },
      { id: 15, name: 'D.ª Florinda' },
      { id: 16, name: 'Prof.º Girafales' },
      { id: 17, name: 'Kiko' },
      { id: 18, name: 'Sr.º Barriga' },
      { id: 19, name: 'Nhonho' },
      { id: 20, name: 'Pópis' },
      { id: 21, name: 'Sr.º Jaiminho' },      
      { id: 22, name: 'Godinez' },
      { id: 23, name: 'Paty' },
      { id: 24, name: 'D.ª Neves' }      
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has
  // an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // If the heroes array is not empty, the method below returns
  // the highest hero id +.
  genId(heroes: Hero[]): number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

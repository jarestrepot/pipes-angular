import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform( heroes:Hero[], sortBy: keyof Hero | null = null ): Hero[] {
    if (!sortBy) return heroes;

    const mapSortBy = {
      'name': (a: Hero, b: Hero) => (a.name > b.name) ? 1 : -1,
      'canFly': (a: Hero, b: Hero) => (a.canFly > b.canFly) ? 1 : -1,
      'color': (a: Hero, b: Hero) => (a.color > b.color) ? 1 : -1,
    };

    return heroes.sort( mapSortBy[sortBy] );
  }

}

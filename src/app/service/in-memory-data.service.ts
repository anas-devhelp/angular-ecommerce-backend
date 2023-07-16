import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from '../interfaces/Category';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const categories = [
      { id: 1, title: 'Category A', description:'', imageUrl: '' },
      { id: 2, title: 'Category B', description:'', imageUrl: '' },
      { id: 3, title: 'Category C', description:'', imageUrl: '' },
      { id: 4, title: 'Category D', description:'', imageUrl: '' },
      { id: 5, title: 'Category E', description:'', imageUrl: '' },
    ];
    return {categories};
}
    genId(categories: Category[]): number {
      return categories.length > 0 ? Math.max(...categories.map(category => category.id)) + 1 : 1;
    }

}

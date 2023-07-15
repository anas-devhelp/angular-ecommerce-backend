import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../interfaces/Category';
import { CATEGORIES } from '../mock/mock-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): Observable<Category[]>{
    const categories = of(CATEGORIES);
    return categories;
  }
}

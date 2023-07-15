import { Component } from '@angular/core';
import { Category } from '../interfaces/Category';
import { CATEGORIES } from '../mock/mock-category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {


  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  
  categories: Category[] = [];

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories); ;
  }


  category: Category = {

    id:1,
    title: 'Category A',
    description: 'Category A description',
    imageUrl: 'Image url'
  };

  selectedCategory?: Category;
  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

}

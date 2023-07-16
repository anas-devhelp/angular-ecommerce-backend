import { Component } from '@angular/core';
import { Category } from '../interfaces/Category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    categories: Category[] = [];
    constructor(private categoryService: CategoryService) { }

    ngOnInit(): void {
      this.getCategories();
    }

    getCategories(): void {
      this.categoryService.getCategories()
        .subscribe(categories => this.categories = categories);
    }
}

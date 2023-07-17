import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Category } from '../interfaces/Category';
import { CATEGORIES } from '../mock/mock-category';
import { CategoryService } from '../service/category.service';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  
  constructor(private categoryService: CategoryService, private location: Location) {}

  ngOnInit(): void {
    this.getCategories();
  }

  
  categories: Category[] = [];
  deleteId: number = 0;

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories); ;
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.categoryService.addCategory({ title } as Category)
      .subscribe(category => {
        this.categories.push(category);
      });
  }

  delete(id: number): void {
        //this.categories = this.categories.filter(h => h !== category);
        this.categoryService.deleteCategory(id).subscribe(()=>{
          this.deleteId = 0;
          this.location.replaceState(this.location.path());
          window.location.reload();  
        });  
        
  }

  openCloseConfirmationDialog(id: number): void {
    console.log('openConfirmationDialog:'+id);
    this.deleteId = id;
  }

}

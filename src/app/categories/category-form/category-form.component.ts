import { Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../../interfaces/Category';
import { CategoryService } from '../../service/category.service';
@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location
  ) {
    this.category = { id: 0, title: '', description:'', imageUrl: '', slug:'' };
  }


  @Input() category: Category;


  add(): void {
    if (this.category) {
      console.log(this.category);
      this.categoryService.addCategory(this.category)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}

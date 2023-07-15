import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';

import { FormsModule } from '@angular/forms';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../interfaces/Category';
import { CATEGORIES } from '../mock/mock-category';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  //private categoriesUrl = 'api/categories'; 
  private categoriesUrl = environment.ecommAdminApiEndpoint+'/category'; 

  private httpOptions = {
    headers: new HttpHeaders(
      //{ 'Content-Type': 'application/json', 'Referrer-Policy':'no-referrer'}
    )
  };

  getCategories(): Observable<Category[]>{
    // const categories = of(CATEGORIES);
    // return categories;
    console.log(this.categoriesUrl);
    return this.http.get<Category[]>(this.categoriesUrl)
  }

  getCategory(id: number): Observable<Category> {
    // For now, assume that a category with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    //const category = CATEGORIES.find(c => c.id === id)!;
    //this.messageService.add(`categoryService: fetched category id=${id}`);
    //return of(category);
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get<Category>(url).pipe(
      tap(_ => this.log(`fetched category id=${id}`)),
      catchError(this.handleError<Category>(`getcategory id=${id}`))
    );
  }

  /** PUT: update the category on the server */
  updateCategory(category: Category): Observable<any> {
    return this.http.put(this.categoriesUrl, category, this.httpOptions).pipe(
      tap(_ => this.log(`updated category id=${category.id}`)),
      catchError(this.handleError<any>('updateCategory'))
    );
  }


  /** POST: add a new category to the server */
  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.categoriesUrl, category, this.httpOptions).pipe(
      tap((newCategory: Category) => this.log(`added category w/ id=${newCategory.id}`)),
      catchError(this.handleError<Category>('addCategory'))
    );
  }


  /** DELETE: delete the category from the server */
  deleteCategory(id: number): Observable<Category> {
    const url = `${this.categoriesUrl}/${id}`;

    return this.http.delete<Category>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted category id=${id}`)),
      catchError(this.handleError<Category>('deleteCategory'))
    );
  }

  /* GET categories whose name contains search term */
  searchCategories(term: string): Observable<Category[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Category[]>(`${this.categoriesUrl}/?title=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found categories matching "${term}"`) :
         this.log(`no categories matching "${term}"`)),
      catchError(this.handleError<Category[]>('searchCategories', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
  }};


  /** Log a categoryService message with the MessageService */
  private log(message: string) {
      //this.messageService.add(`categoryService: ${message}`);
      console.log(message); 
  }

}



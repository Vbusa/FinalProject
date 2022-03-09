import { Injectable } from '@angular/core';
import { Book } from './book';

import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private booksUrl = 'http://localhost:3000/api/books';
  private singlebookUrl = 'http://localhost:3000/api/singlebook';
  private createbookUrl = 'http://localhost:3000/api/singlebook';

  constructor( private http : HttpClient) { }
  getbooks() : Promise<void | Book[]> {
    return this.http.get(this.booksUrl)
                .toPromise()
                .then(response => response as Book[])
                .catch(this.handleError);
      }
      private handleError (error: any){
        console.log("error");
      }
  getSingleBook(bookId: string) {
    return this.http.get<Book>(this.singlebookUrl + '/' + bookId);
  }
  createBook(newBook: Book): Promise<void | Book> {
    return this.http.post(this.createbookUrl, newBook)
        //.subscribe((newFood : Food) => {
         // console.log(newFood);
         .toPromise()
         .then(response => response as Book)
         .catch(this.handleError)
  }
}

import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookServiceService]
})
export class BookListComponent implements OnInit {

  books : Book[] = [];
  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.bookService
      .getbooks()
      .then(books=> {
        this.books = books as Book[];
      })
  }
}

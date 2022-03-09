import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [BookServiceService]
})
export class DetailComponent implements OnInit {

  constructor(
    private bookServiceService: BookServiceService,
    private route: ActivatedRoute
  ) { }

  newBook!: Book;
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.bookServiceService.getSingleBook(params['bookid'])
      })
    )
    .subscribe((newBook: Book) => {
      this.newBook = newBook;
    })
  }
  pageContent = {
    header : {
      title: 'Book',
      body : 'Details of the particular book',
      _id : ''
    }
  }
}

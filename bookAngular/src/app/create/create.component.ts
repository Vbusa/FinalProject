import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [BookServiceService]
})
export class CreateComponent implements OnInit {

  public newBook: Book = {
    title:'',
    author:'',
    _id:''
  }
  constructor(private bookServiceService: BookServiceService) { }

  ngOnInit(): void {
  }
  public createNewBook(newBook: Book):void {
    this.bookServiceService.createBook(newBook);
  }
}

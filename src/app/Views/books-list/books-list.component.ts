import { Component, inject } from '@angular/core';
import { IBook } from '../../Models/book.mode';
import { BookItemComponent}  from '../../Components/book-item/book-item.component';
import { NgFor } from '@angular/common';
import { BookService } from '../../Services/book.service';

@Component({
  selector: 'app-books-list',
  imports: [BookItemComponent, NgFor],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
  bookService = inject(BookService);

  listaLibros: IBook [] = this.bookService.getBooks();
}

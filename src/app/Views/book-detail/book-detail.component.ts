import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../Services/book.service';
import { IBook } from '../../Models/book.mode';


@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {
 bookselected!: IBook;

 private route = inject(Router);
 private Aroute = inject(ActivatedRoute);
 private BookService = inject(BookService);

 constructor(){
  this.Aroute.params.subscribe(params => {
    const id = params['id'];
    const book = this.BookService.getBookById(Number(id));
    console.log(book);

    if (!book) {
      console.log('Book not found');
      this.route.navigate(['not-found', id]);
    } else {
      this.bookselected = book;
        }
  });
 }
  gotoHome(): void{
    this.route.navigate(['']);
  }
}

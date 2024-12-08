import { Component, inject, Input } from '@angular/core';
import { IBook } from '../../Models/book.mode';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-item',
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
  route = inject(Router);
  @Input() item!: IBook;

  navigateToID(){
    this.route.navigate(['books', this.item.id])
  }
}

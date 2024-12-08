import { Injectable } from '@angular/core';
import { IBook } from '../Models/book.mode';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  listaLibros: IBook[]=[
    { id:1, title: 'El Principito', author: 'Antoine de Saint-Exupéry'},
    { id:2, title: '1984', author: 'George Orwell'},
    { id:3, title: 'Cien años de soledad', author: 'Gabriel García Márquez'}      
  ]
  constructor() { }

  getBooks(): IBook[]{
    return this.listaLibros;
  }

  getBookById(id:number): IBook | undefined{
    for (let i=0; i < this.listaLibros.length; i++) {
      if (this.listaLibros[i].id === id) {
        return this.listaLibros[i];
      }
    }
    return undefined;
   }
}

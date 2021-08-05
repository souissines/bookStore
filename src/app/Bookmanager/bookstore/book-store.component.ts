import {Component, Inject, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm,} from '@angular/forms';
import {Book} from '../bookstore/book';

import {BookService} from '../book.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent implements OnInit {

  public books: Book[] = [];
  public editBook: Book;
  public deleteBook: Book;

  constructor(private bookService: BookService, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.getBooks();
  }

  public getBooks(): void {
    this.bookService.getBooks().subscribe(
      (response: Book[]) => {
        this.books = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }


  public onAddBook(addForm: NgForm): void {
    //this.openDialog().click();
    this.bookService.addBooks(addForm.value).subscribe(
      (response: Book) => {
        console.log(response);
        this.getBooks();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateBook(book: Book): void {
    this.bookService.updateBook(book).subscribe(
      (response: Book) => {
        console.log(response);
        this.getBooks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteBook(bookId: any): void {
    this.bookService.deleteBook(bookId).subscribe(
      (response: void) => {
        console.log(response);
        this.getBooks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // // public searchBooks(key: string): void {
  // //   console.log(key);
  // //   const results: Book[] = [];
  // //   for (const book of this.book) {
  // //     if (book.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
  // //     || book.author.toLowerCase().indexOf(key.toLowerCase()) !== -1
  // //     || book.releaseDate.toLowerCase().indexOf(key.toLowerCase()) !== -1

  // //     || book.registerDate.toLowerCase().indexOf(key.toLowerCase()) !== -1
  // //     || book.totalExamplaries.toLowerCase().indexOf(key.toLowerCase()) !== -1)
  // //      {
  // //       results.push(book);
  // //     }
  // //   }
  // //   this.books = results;
  // //   if (results.length === 0 || !key) {
  // //     this.getBooks();
  // //   }
  // // }


  public onOpenModal(book: Book, mode: string): void {


    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {

      button.setAttribute('data-target', '#addBookModal');
    }

    if (mode === 'edit') {

      button.setAttribute('data-target', '#updateBookModal');
    }

    if (mode === 'delete') {

      button.setAttribute('data-target', '#deleteBookModal');
    }
    container?.appendChild(button);
    button.click();
  }


  openDialog(book: Book, actionType: string): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {book: book, actionType: actionType}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }


}

@Component({

  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog implements OnInit{
 active=true;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, private bookService: BookService,
    @Inject(MAT_DIALOG_DATA) public book: any) {
  }
  ngOnInit(){
    console.log(this.book)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  toDelete() {
    this.book.toDelete= true ;
this.dialogRef.close(this.book);
  }
}



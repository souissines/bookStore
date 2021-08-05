import {Component, Inject, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
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



  openDialog(book: Book, actionType: string): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {book: book, actionType: actionType}

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.actionType == 'add') {
        // add book result.book
        this.bookService.addBook(result.book).subscribe(() => this.getBooks());
        console.log(result);
      } else if (result.actionType == 'edit') {
        // edit  book
      this.bookService.updateBook(result.book).subscribe(() => this.getBooks());;
      } else if (result.actionType == 'delete') {
       this.bookService.deleteBook(result.book.id).subscribe(() => this.getBooks());;
        console.log(result);
      }
    });
  }


}

@Component({

  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, private bookService: BookService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    console.log(this.data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}




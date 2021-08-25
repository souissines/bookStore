import {Component, Inject, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Book} from '../bookstore/book';
import {BookService} from '../book.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";


@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent implements OnInit {

  public books: Book[] = [];

  book: Book;


  constructor(private bookService: BookService, public dialog: MatDialog,
              public router: Router) {

  }


  async ngOnInit() {
    this.getBooks()


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


  openDialog(book: Book, actionType: string): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      data: {book: book, actionType: actionType}

    });

    dialogRef.afterClosed().subscribe(result => {

      if (result.actionType == 'delete') {
        this.bookService.deleteBook(result.book.id).subscribe(() => this.getBooks());
        ;
        console.log(result);
      }
    });
  }


  searchBooks(key: string): void {
    console.log(key);
    const results: Book[] = [];
    for (const book of this.books) {
      if (book.title?.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || book.author?.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(book);
        //else  console.log(message="book is not found");
      }
    }
    this.books = results;
    if (results.length === 0 || !key) {
      this.getBooks();
    }
  }


  edit(bookId: any) {
    this.router.navigate(['/book/' + bookId]);
  }

  add() {
    this.router.navigate(['/book']);

  }

  downloadPdf(base64String: string, fileName: string) {
    const source = base64String;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.pdf`
    link.click();
  }


  downloadMyFile(book: Book) {

    this.downloadPdf(book.data as string, book.title as string);

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




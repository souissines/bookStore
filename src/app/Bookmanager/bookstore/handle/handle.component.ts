import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../book.service";
import {Book} from "../book";
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-handle',
  templateUrl: './handle.component.html',
  styleUrls: ['./handle.component.css']
})
export class HandleComponent implements OnInit {
  bookForm: FormGroup;
  book: Book = {};
  isAddForm: boolean;
  fileBase64: string ;

  constructor(private formBuilder: FormBuilder, private bookService: BookService,
              private router: Router, private route: ActivatedRoute, private http: HttpClient
  ) {
    const routeParams = this.route.snapshot.paramMap;
    const bookIdFromRoute = Number(routeParams.get('bookId'));
    if (!!bookIdFromRoute) {
      this.isAddForm = false;
      this.bookService.getBooks().subscribe(result => {
        this.book = result.find(book => book.id === bookIdFromRoute) as Book
        this.initForm(this.book);
      });
    } else {
      this.isAddForm = true;
      this.initForm(this.book);
    }

  }

  private initForm(book: Book) {
    this.bookForm = this.formBuilder.group({
      title: [book?.title, Validators.required],
      author: [book?.author, Validators.required],
      releaseDate: book?.releaseDate,
      registerDate: book?.registerDate,
      totalExamplaries: book?.totalExamplaries,
      imageUrl: book?.imageUrl


    });
  }

  ngOnInit() {
  }

  onFileChange(event: any) {
    this.getBase64(event.target.files[0]).then(data => {
      if (!this.book) {
        this.book = {};
      }
      this.book.data = (data as string);
    })
    ;

  }


  SaveBook() {
    if (!!this.book) {
      this.book.title = this.bookForm.get('title')?.value;
      this.book.author = this.bookForm.get('author')?.value;
      this.book.releaseDate = this.bookForm.get('releaseDate')?.value;
      this.book.registerDate = this.bookForm.get('registerDate')?.value;
      this.book.imageUrl = this.bookForm.get('imageUrl')?.value;
      this.book.totalExamplaries = this.bookForm.get('totalExamplaries')?.value;
      if (this.isAddForm) {
        this.bookService.addBook(this.book).subscribe(() => this.router.navigate(['/Bookmanager/bookstore']));
      } else {
        this.bookService.updateBook(this.book).subscribe(() => this.router.navigate(['/Bookmanager/bookstore']));
      }

    }


  }


  getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }


}

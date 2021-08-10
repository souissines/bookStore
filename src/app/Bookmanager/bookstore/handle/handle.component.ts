import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  myFiles: string [] = [];
  public books: Book[] = [];
  bookForm: FormGroup;
  book: Book | undefined;
  isAddForm: boolean;

  constructor(private formBuilder: FormBuilder, private bookService: BookService,
              private router: Router, private route: ActivatedRoute, private http: HttpClient
  ) {
    this.book = {};
    const routeParams = this.route.snapshot.paramMap;
    const bookIdFromRoute = Number(routeParams.get('bookId'));
    if (!!bookIdFromRoute) {
      this.isAddForm = false;
      this.bookService.getBooks().subscribe(result => {
        this.book = result.find(book => book.id === bookIdFromRoute)
        this.initForm();
      });
    } else {
      this.isAddForm = true;
      this.initForm();
    }

  }

  private initForm() {
    this.bookForm = this.formBuilder.group({
      title: [this.book?.title, Validators.required],
      author: [this.book?.author, Validators.required],
      releaseDate: this.book?.releaseDate,
      registerDate: this.book?.registerDate,
      totalExamplaries: this.book?.totalExamplaries,
      imageUrl: this.book?.imageUrl


    });
  }

  ngOnInit() {
    this.bookForm = new FormGroup({
      file: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.bookForm.controls;
  }

  onFileChange(event: any) {
    let dataBase64: any;

    this.getBase64(event.target.files[0]).then(data => {
      dataBase64 = data;
      console.log(dataBase64);
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
      this.book.data = this.bookForm.get('data')?.value;
      this.book.totalExamplaries = this.bookForm.get('totalExamplaries')?.value;
      if (this.isAddForm) {
        this.bookService.addBook(this.book).subscribe(() => this.router.navigate(['/Bookmanager/bookstore']));
      } else {
        this.bookService.updateBook(this.book).subscribe(() => this.router.navigate(['/Bookmanager/bookstore']));
      }
      ;


      const formData = new FormData();

      for (var i = 0; i < this.myFiles.length; i++) {
        formData.append("file[]", this.myFiles[i]);
      }

      this.http.post('http://localhost:8080/book/upload', formData)
        .subscribe(res => {
          console.log(res);
          alert('Uploaded Successfully.');
        })

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

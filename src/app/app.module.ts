import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BookStoreComponent, DialogOverviewExampleDialog} from './Bookmanager/bookstore/book-store.component';
import {CustomerComponent} from './Customermanager/customer/customer.component';
import {BookService} from './Bookmanager/book.service';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CustomerService} from "./Customermanager/customer.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookStoreComponent,
    CustomerComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ]
  ,
  providers: [BookService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

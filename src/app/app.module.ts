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
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {AngularFileUploaderModule} from "angular-file-uploader";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";
import { HandleComponent } from './Bookmanager/bookstore/handle/handle.component';
import {DialogOverviewExampleComponent} from "./Customermanager/customer/dialog-overview-example/dialog-overview-example.component";
import {PdfViewerModule} from "ng2-pdf-viewer";

const materialModules = [
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatToolbarModule
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookStoreComponent,
    CustomerComponent,
    DialogOverviewExampleDialog,
    HandleComponent,
    DialogOverviewExampleComponent


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
    NgbModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    AngularFileUploaderModule,
    MatToolbarModule,
    PdfViewerModule



  ],
  entryComponents: [
    DialogOverviewExampleDialog,

  ]
  ,
  providers: [BookService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

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
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AngularFireAuthModule, } from 'angularfire2/auth'
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/messaging';
import 'firebase/storage';
import 'firebase/functions';
import {AngularFireModule} from "angularfire2";
import * as firebase from "firebase";
import { HeaderComponent } from './header/header.component';
// MDB Angular Pro
// MDB Angular Free
import {ButtonsModule, WavesModule, IconsModule, InputsModule, CardsModule, NavbarModule} from 'angular-bootstrap-md'







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
    DialogOverviewExampleComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,



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
    AngularFireAuthModule,
    AngularFireModule,
    ButtonsModule,
    WavesModule,
    IconsModule,
    InputsModule,
    CardsModule,
    NavbarModule


  ],
  entryComponents: [
    DialogOverviewExampleDialog,

  ]
  ,
  providers: [BookService,CustomerService,AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

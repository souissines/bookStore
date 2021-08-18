import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookStoreComponent } from './Bookmanager/bookstore/book-store.component';
import { CustomerComponent } from './Customermanager/customer/customer.component';
import {HandleComponent} from "./Bookmanager/bookstore/handle/handle.component";
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'Bookmanager/bookstore',canActivate: [AuthGuardService], component:  BookStoreComponent },
  { path: 'Customermanager/Customer',canActivate: [AuthGuardService], component: CustomerComponent },
  { path: 'book/:bookId', component:HandleComponent },
  { path: 'book', component:HandleComponent },
  {path:'', redirectTo: 'header',pathMatch:'full'},
  {path:'**',redirectTo: 'header'}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

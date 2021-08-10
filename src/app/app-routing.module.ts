import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookStoreComponent } from './Bookmanager/bookstore/book-store.component';
import { CustomerComponent } from './Customermanager/customer/customer.component';
import {HandleComponent} from "./Bookmanager/bookstore/handle/handle.component";

const routes: Routes = [
  { path: 'Bookmanager/bookstore', component:  BookStoreComponent },
  { path: 'Customermanager/Customer', component: CustomerComponent },
  {path:'home', component: HandleComponent},
  // { path: 'Bookmanager/bookstore/handle', component:HandleComponent},
  { path: '', component:HandleComponent },
  { path: 'book/:bookId', component:HandleComponent },
  { path: 'book', component:HandleComponent },
  {path:'', redirectTo: 'home',pathMatch:'full'},
  {path:'**',redirectTo: 'home'}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

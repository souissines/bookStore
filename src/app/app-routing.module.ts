import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookStoreComponent } from './Bookmanager/bookstore/book-store.component';
import { CustomerComponent } from './Customermanager/customer/customer.component';

const routes: Routes = [
  { path: 'Bookmanager/bookstore', component:  BookStoreComponent },
  { path: 'Customermanager/Customer', component: CustomerComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {Component, Inject, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Customer} from "./customer";
import {CustomerService} from "../customer.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Book} from "../../Bookmanager/bookstore/book";
import {DialogOverviewExampleComponent} from "./dialog-overview-example/dialog-overview-example.component";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from '@angular/material/core';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customers: Customer[];

  constructor(private customerService: CustomerService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getCustomers();
  }


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  //matcher = new MyErrorStateMatcher();




  public getCustomers(): void {
    this.customerService.getCustomers().subscribe(
      (response: Customer[]) => {
        this.customers = response;
        console.log(this.customers);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  openDialog(customer: Customer, actionType: string): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleComponent, {
      width: '350px',
      data: {customer: customer, actionType: actionType}

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.actionType == 'add') {

        this.customerService.addCustomer(result.customer).subscribe(() => this.getCustomers());
        console.log(result);
      } else if (result.actionType == 'edit') {

        this.customerService.updateCustomer(result.customer).subscribe(() => this.getCustomers());
        ;
      } else if (result.actionType == 'delete') {
        this.customerService.deleteCustomer(result.customer.id).subscribe(() => this.getCustomers());
        ;
        console.log(result);
      }
    });
  }



  searchCustomers(key: string): void {
    console.log(key);
    const results: Customer[] = [];
    for (const customer of this.customers) {
      if (customer.name?.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || customer.jobTitle?.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(customer);
        //else  console.log(message="book is not found");
      }
    }
    this.customers = results;
    if (results.length === 0 || !key) {
      this.getCustomers();
    }


  }}



